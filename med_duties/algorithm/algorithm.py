import calendar
from random import shuffle
from math import ceil
from collections import defaultdict
from itertools import combinations, chain, product

from constants import (
    WEEKDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
    HOLIDAY,

    MODIFIER_DUTY_IMPOSSIBLE,
    MODIFIER_TWO_DAYS_APART,
    MODIFIER_THREE_DAYS_APART,
    MODIFIER_FOUR_DAYS_APART,
    MODIFIER_FRI_SUN,
    MODIFIER_THU_SAT,
    MODIFIER_MORE_THAN_TWO_WEEKENDS,
    MODIFIER_LESS_THAN_TWO_WEEKENDS,
    MODIFIER_DONT_STEAL_SUNDAYS,
    MODIFIER_THURSDAY_IS_ORDINARY,
    MODIFIER_SATURDAY_IF_ONE_WEEKEND,
    HOLIDAYS,

    MAX_NUMBER_OF_DUTIES_PER_MONTH
)



class Duty():
    def __init__(self, day, person, position):
        self.day = day
        self.person = person
        self.position = position
    
    def get_person(self):
        return self.person

    def get_position(self):
        return self.position

    def get_day(self):
        return self.day

    def get_month(self):
        return self.day.month
    
    def get_year(self):
        return self.day.year


class Day():
    def __init__(self, year, month, day):
        weekday = calendar.weekday(year, month, day)
        try:
            it_is_holiday = day in HOLIDAYS[year][month]
        except KeyError:
            it_is_holiday = False

        if it_is_holiday:
            strain_points = HOLIDAY
            category = 'holiday'
        elif weekday < 3:
            strain_points = WEEKDAY
            category = 'weekday'
        elif weekday == 3:
            strain_points = THURSDAY
            category = 'thursday'
        elif weekday == 4:
            strain_points = FRIDAY
            category = 'weekend'
        elif weekday == 5:
            strain_points = SATURDAY
            category = 'weekend'
        elif weekday == 6:
            strain_points = SUNDAY
            category = 'weekend'

        self.year = year
        self.month = month
        self.number = day
        self.weekday = weekday
        self.week = int(ceil(
            (self.number + calendar.weekday(year, month, 1)) / 7))
        self.strain_points = strain_points
        self.category = category
    
    def __str__(self):
        return f"({self.year}/{self.month}/{self.number})"


class MonthlyDuties():
    def __init__(self, year, month, duty_positions, doctors):
        self.number_of_days = calendar.monthrange(year, month)[1]
        self.days = [Day(year, month, day) for day 
                    in range(1, self.number_of_days + 1)]
        self.duties = {}
        for position in range(duty_positions):
            self.duties[position] = {}
        self.month = month
        self.year = year
        self.duty_positions = range(duty_positions)
        self.doctors = doctors

    def __str__(self):
        return f"{self.month}/{self.year} - duties"

    def set_duties(self):
        if not self._can_duties_be_set():
            return False

        self._assign_and_post_check()
        
        return True

    def _can_duties_be_set(self):
        try:
            # Check if there are enough doctors.
            self._is_there_enough_doctors()

            # Check if preferred days don't overlap 
            # and if doctor doesn't have more preferences then max no of duties.
            self._check_preferred_days()

            return True

        except Exception as err:
            print(err)
            return False
    
    def _is_there_enough_doctors(self):
        # Checks if there is a fixed minimum of doctors
        # for 1 to 3 positions.
        min_doctors_for_positions = {
            1: 3,
            2: 5,
            3: 8,
        }

        duty_positions = len(self.duty_positions)
        min_doctors = min_doctors_for_positions[duty_positions]
        actual_doctors = len(self.doctors)

        if actual_doctors < min_doctors:
            raise Exception(f'Not enough doctors for {duty_positions}.',
                f'Expected {min_doctors}, while found {actual_doctors}.')

    def _is_there_enough_doctors_for_each_position(self):
        # Checks if there is a fixed minimum of doctors for every position.
        min_doctors_for_number_of_positions = {
            1: 3,
            2: 5,
            3: 8,
        }

        doctors_who_prefer_duty_position = {}
        for position in self.duty_positions:
            doctors_who_prefer_duty_position[position] = len([
                doctor 
                for doctor in self.doctors 
                if position 
                in doctor.get_preferred_positions(self.year, self.month)])
        
        number_of_positions = len(self.duty_positions)
        positions_with_not_enough_doctors = []
        for position in doctors_who_prefer_duty_position.keys():
            if (doctors_who_prefer_duty_position[position] 
                    < min_doctors_for_number_of_positions[number_of_positions]):
                positions_with_not_enough_doctors.append(position)

        if positions_with_not_enough_doctors:
            minimum = min_doctors_for_number_of_positions[number_of_positions]
            raise Exception(
                f'Error: minimum {minimum} doctors ',
                f'for each of {number_of_positions} positions.',
                f'Check position(s): {positions_with_not_enough_doctors}')

    def _check_max_duties(self):
        # Checks if combination of max duties and preferred weekdays
        # allows for all duties to be set.
        duties_in_month = len(self.days) * len(self.duty_positions)
        total_max_duties = sum([
            doctor.get_max_number_of_duties(self.year, self.month) 
            for doctor in self.doctors])
        if total_max_duties < duties_in_month:
            raise Exception("Total number of duties accepted by doctors",
                "is not sufficient to fill all duties on all positions.")

        wasted_duties = {}
        # Get unique combinations of duty positions of all lengths.
        positions_combinations = self._get_combinations(self.duty_positions)

        for combination in positions_combinations:
            # Get a dictionary with groups of weekdays as keys and  
            # lists of doctors who prefer such groups as values.
            preferred_weekdays_groups = self._get_weekdays_preferences(combination)
            # Create a dict of dicts, where keys are position combinations 
            # and weekdays groups and values are numbers of wasted duties 
            # for each weekdays group for exactly this combination.
            wasted_duties[combination] = self._get_wasted_duties(
                combination, preferred_weekdays_groups)

        # Reduce declared max duties by number wasted duties,
        # which cannot be set.
        total_wasted_duties = sum(
            [sum(combination.values())
            for combination in wasted_duties.values()])
        total_declared_duties = sum([
            doctor.get_max_number_of_duties(self.year, self.month) 
            for doctor in self.doctors])
        actual_max_duties = total_declared_duties - total_wasted_duties

        # Raise error if there are not enough 'actual' duties
        if actual_max_duties < duties_in_month:
            weekdays_to_check = [
                list(item.keys()) 
                for item in wasted_duties.values() 
                if item.keys()]
            raise Exception(f"Error: not enough accepted duties "+
            "due to overlapping weekday preferences.\n"+
            f"Missing duties: {duties_in_month - actual_max_duties}\n" +
            f"Check weekdays: {weekdays_to_check}")
                    
    def _get_combinations(self, given_list):
        # Returns list of combinations of all lengths.
        combs = []
        for i in range(1, len(given_list)+1):
            combs += [*combinations(given_list, i)]
        return combs

    def _get_weekdays_preferences(self, positions):
        # Returns a dictionary of all doctors who prefer 
        # exactly this position combination, for each weekdays group.
        preferred_weekdays_groups = defaultdict(list)
        for doctor in self.doctors:
            if (tuple(doctor.get_preferred_positions(self.year, self.month)) 
                    == positions):
                preferred_weekdays = tuple(
                    doctor.get_preferred_weekdays(self.year, self.month))
                # Ommiting preference for all 7 days is necessary, otherwise 
                # it would be necessary for total max_duties 
                # to be less or equal to total number of duties.
                if preferred_weekdays == tuple(range(7)):
                    continue

                preferred_weekdays_groups[preferred_weekdays].append(doctor)

        return preferred_weekdays_groups

    def _get_wasted_duties(self, positions, preferred_weekdays_groups):
        # Finds how many of declared max duties will not be set
        # (for each weekdays group for given positions combination).
        wasted_duties = {}

        # Find maximum duties accepted by all doctors 
        # who prefer each weekdays group and keep doctors in a set.
        for weekdays_group in preferred_weekdays_groups.keys():
            sum_of_max_accepted_duties = sum(
                [doctor.get_max_number_of_duties(self.year, self.month) 
                for doctor in preferred_weekdays_groups[weekdays_group]])
            doctors_with_preference_for_group_or_subgroup = set()
            doctors_with_preference_for_group_or_subgroup.update(
                preferred_weekdays_groups[weekdays_group])

            # Find all subgroups of current group
            # and update max duties number and doctors set.
            for another_weekdays_group in preferred_weekdays_groups.keys():
                if another_weekdays_group == weekdays_group:
                    continue
                group_is_subgroup = all(weekday in weekdays_group 
                        for weekday in another_weekdays_group)
                if group_is_subgroup:
                    sum_of_max_accepted_duties += sum(
                        [doctor.get_max_number_of_duties(self.year, self.month) 
                        for doctor 
                        in preferred_weekdays_groups[another_weekdays_group]])
                    doctors_with_preference_for_group_or_subgroup.update(
                        preferred_weekdays_groups[another_weekdays_group])

            # Find how many duties there are to take 
            # in current weekdays group.
            sum_of_duties_on_weekdays_group = 0
            for weekday in weekdays_group:
                sum_of_duties_on_weekdays_group += (
                    self._count_weekdays(int(weekday)) * len(positions))

            if (sum_of_max_accepted_duties > sum_of_duties_on_weekdays_group):
                missing_duties = (
                    sum_of_max_accepted_duties 
                    - sum_of_duties_on_weekdays_group)
                wasted_duties[weekdays_group] = missing_duties
        
        return wasted_duties

    def _check_preferred_days(self):
        preferred_positions = defaultdict(list)
        number_of_positions = len(self.duty_positions)
        errors = set()
    
        for doctor in self.doctors:
            doctors_exceptions = doctor.get_exceptions(self.year, self.month)
            doctors_preferred_days = doctor.get_preferred_days(
                self.year, self.month)
            doctors_max_number_of_duties = doctor.get_max_number_of_duties(
                self.year, self.month)

            for exception in doctors_exceptions:
                if exception in doctors_preferred_days:
                    errors.add(f"{doctor.name} both prefers "+
                    f"and excludes day {exception}")

            # Check if doctor has more preferences than his duty number limit.
            if len(doctors_preferred_days) > doctors_max_number_of_duties:
                errors.add(f"{doctor.name} has more preferred days " +
                    f"than accepted number of duties.")

            # Check if doctor can be assigned duty on his preferred days
            # on any of his preferred positions.
            for day_number in doctors_preferred_days:
                
                doctors_preferred_positions = doctor.get_preferred_positions(
                    self.year, self.month)

                all_positions_are_taken = (
                    len(preferred_positions[day_number]) == number_of_positions)
            
                unique_positions_including_doctors = set(
                    [*chain(
                        [*chain.from_iterable(preferred_positions[day_number])], 
                        doctors_preferred_positions)])
                doctors_position_will_fit = (len(unique_positions_including_doctors) 
                    >= (len(preferred_positions[day_number]) + 1))

                if all_positions_are_taken or not doctors_position_will_fit:
                    errors.add(f"More doctors prefer day {day_number} " +
                        "than there are available positions.")
                # If any of positions fits, add them
                # to check further doctors against them.
                else:
                    preferred_positions[day_number].append(
                        doctors_preferred_positions)

                # Check if doctor's preferences are not on consecutive days.
                if day_number + 1 in doctors_preferred_days:
                    errors.add(f"Preferred days for {doctor.name} " +
                        f"are on consecutive days (check days {day_number}, " +
                        f"{day_number+1}).")
        
        if errors:
            error_content = "\n".join(list(errors))
            raise Exception(error_content)

    def _assign_and_post_check(self, iteration=1):

        self._assign_preferred_duties()

        for position in self.duty_positions:
            self._assign_duties(position)

            try:
                self._check_for_missing_duties(position)
                self._check_for_forbidden_duties()
            except Exception as err:
                print(err)
                self.clear_duties()
                if iteration > 5:
                    self._raise_max_duties()
                if iteration > 20:
                    self._add_accepted_weekdays()
                if iteration % 15 == 0 and iteration > 0:
                    self._add_accepted_positions()

                if iteration % 50 == 0:
                    self._cut_exceptions()
                print(f'Iteration: {iteration}')
                self._assign_and_post_check(iteration+1)

    def _assign_preferred_duties(self):
        # Pre-assign, omits doctors evaluation.
        duties = defaultdict(dict)

        for doctor in self.doctors:
            preferences = doctor.get_preferred_days(self.year, self.month)
            preferred_days = [
                self.get_day(day_number) 
                for day_number in preferences 
                if len(preferences) > 0]

            for day in preferred_days:
                preferred_positions = doctor.get_preferred_positions(
                    self.year, self.month)
                duties[day][doctor] = preferred_positions

        for day in duties.keys():
            options = duties[day].values()
            accepted_options = [
                option 
                for option in product(*options) 
                if len(option) == len(set(option))]

            shuffle(accepted_options)
            chosen_option = accepted_options[0]
            doctors = [*chain(duties[day].keys())]

            for pair in zip(doctors, chosen_option):
                doctor = pair[0]
                position = pair[1]
        
                duty = Duty(day, doctor, position)
                self.set_duty(duty, day.strain_points)

    def _assign_duties(self, position):
        # Assigns all duties except doctors preferences
        doctors = [
            doctor 
            for doctor in self.doctors 
            if position in doctor.get_preferred_positions(self.year, self.month)]
        shuffle(doctors)

        # Limit iterations to fit number of days
        # not set via _assign_preferred_duties method.
        duties_already_assigned = len(self.duties[position].values())

        for _ in range(len(self.days) - duties_already_assigned):

            by_strain = lambda x : x.get_strain(self.year, self.month)
            by_duties_left = (
                lambda x : x.get_number_of_duties_left(self.year, self.month))
            by_number_of_preferred_positions = (
                lambda x : len(x.get_preferred_positions(self.year, self.month)))
            by_number_of_preferred_weekdays = (
                lambda x : len(x.get_preferred_weekdays(self.year, self.month)))

            shuffle(doctors)
            doctors.sort(key=by_strain)
            doctors.sort(key=by_duties_left, reverse=True)
            doctors.sort(key=by_number_of_preferred_positions)
            doctors.sort(key=by_number_of_preferred_weekdays)

            for doctor in doctors:
                evaluation_chart = doctor.evaluate_duties(self, position)

                # If doctor has reached max number of duties, check another one.
                if not evaluation_chart:
                    continue

                best_day, strain_points = evaluation_chart.get_best()

                # If there is no suitable day for doctor, check another one.
                if not best_day:
                    continue

                duty = Duty(best_day, doctor, position)
                self.set_duty(duty, strain_points)

                break
    
    def set_duty(self, duty, strain_points):
        doctor = duty.person
        position = duty.position
        self.duties[position][duty.get_day()] = duty
        doctor.set_duty(self.year, self.month, duty)
        doctor.set_strain(self.year, self.month, strain_points)

    def _check_for_missing_duties(self, position):
        errors = ''
        for day in self.days:
            if day not in self.duties[position].keys():
                errors += f"Duty on {day} as {position} not set\n"
        if errors:
            raise Exception('Error:\n' + errors)
    
    def _check_for_forbidden_duties(self):
        # Forbidden duties are on same or consecutive day or on excluded day.
        errors = ''
        for doctor in self.doctors:
            duties = doctor.get_duties(self.year, self.month)
            if not duties:
                continue

            dates = [duty.get_day().number for duty in duties]
            dates.sort()

            exceptions = doctor.get_exceptions(self.year, self.month)
            
            for i in range(len(dates)):

                two_duties_on_same_day = (
                    (dates[i] == dates[i+1]) if i < len(dates)-1 else False)
                duties_on_consecutive_days = dates[i] + 1 in dates
                i_have_duty_on_excluded_day = dates[i] in exceptions

                if two_duties_on_same_day:
                    errors += (f"Error: {doctor.get_name()} " +
                        f"has multiple duties on day {dates[i]}\n")

                if duties_on_consecutive_days:
                    errors += (f"Error: {doctor.get_name()} " +
                        f"has duties on consecutive days " +
                        f"{dates[i]} and {dates[i]+1}\n")

                if i_have_duty_on_excluded_day:
                    errors += (f"Error: {doctor.get_name()} "+
                    f'has duty on excluded day: {dates[i]}\n')
        
        if errors:
            raise Exception(errors)

    def _raise_max_duties(self):
        # Choose doctors who prefer more than 3 weekdays.
        # Those who prefer less have automatically lower max no of duties
        # to number of available days.
        doctors = [doctor
            for doctor in self.doctors
            if len(doctor.get_preferred_weekdays(self.year, self.month)) > 3
            and not doctor.is_locked()]

        if doctors:
            by_max_duties = lambda x : x.get_max_number_of_duties(
                self.year, self.month)
            shuffle(doctors)
            doctors.sort(key=by_max_duties)

            chosen_doctor = doctors[0]

            max_duties = chosen_doctor.get_max_number_of_duties(
                self.year, self.month)
            chosen_doctor.set_max_number_of_duties(
                self.year, self.month, max_duties+1)
            print('Could not establish duties.',
                f'Raising {chosen_doctor} max duties by 1 to {max_duties+1}.')
        else:
            for doctor in self.doctors:
                if doctor.is_locked():
                    continue
                max_duties = doctor.get_max_number_of_duties(self.year, self.month)
                doctor.set_max_number_of_duties(self.year, self.month, max_duties+1)
            print('Could not establish duties. Raising doctors max duties by 1')

    def _add_accepted_weekdays(self):
        doctors = [doctor
            for doctor in self.doctors
            if len(doctor.get_preferred_weekdays(self.year, self.month)) < 7
            and not doctor.is_locked()]

        if doctors:
            shuffle(doctors)
            by_preferred_weekdays = (
                lambda x : len(x.get_preferred_weekdays(self.year, self.month)))
            doctors.sort(key=by_preferred_weekdays)
            chosen_doctor = doctors[0]

            preferred_weekdays = set(
                chosen_doctor.get_preferred_weekdays(self.year, self.month))
            weekdays = set(range(7))
            difference = list(weekdays.difference(preferred_weekdays))
            shuffle(difference)
            new_weekday = difference[0]
            new_preferred_weekdays = list(preferred_weekdays) + [new_weekday]
            new_preferred_weekdays.sort()

            chosen_doctor.set_preferred_weekdays(
                self.year, self.month, new_preferred_weekdays)

            print(f'Could not establish duties. Adding day {new_weekday}',
                f'to {chosen_doctor} preferred_weekdays.',
                f'(New preference: {new_preferred_weekdays}).')

    def _cut_exceptions(self):
        # Prevents excessive exceptions use
        exceptions_cut = []
        for doctor in self.doctors:
            if doctor.is_locked():
                continue
            exceptions = doctor.get_exceptions(self.year, self.month)
            if len(exceptions) > 5:
                shuffle(exceptions)
                doctor.set_exceptions(self.year, self.month, exceptions[:5])
                exceptions_cut.append(doctor)

        if exceptions_cut:
            print('Could not establish duties.')
            for doctor in exceptions_cut:
                print(f'Limiting {doctor} exceptions to 5 randomly chosen.')

    def _add_accepted_positions(self):
        changes = []
        for number_of_positions in range(1, len(self.duty_positions)):
            doctors = [doctor
                for doctor in self.doctors
                if (len(doctor.get_preferred_positions(self.year, self.month)) 
                    == number_of_positions)
                and not doctor.is_locked()]
            
            if doctors:
                for doctor in doctors:
                    preferred_positions = set(
                        doctor.get_preferred_positions(self.year, self.month))
                    all_positions = set(self.duty_positions)
                    difference = list(all_positions.difference(preferred_positions))
                    shuffle(difference)
                    new_position = difference[0]
                    new_positions = list(preferred_positions) + [new_position]

                    doctor.set_preferred_positions(
                        self.year, self.month, new_positions)

                    if not changes:
                        changes.append('Could not establish duties.\n')
                    changes += [f'Adding position {new_position} ' +
                        f'to {doctor} preferred positions. ' +
                        f'(New preference: {new_positions}).\n']

                for line in changes:
                    print(line, end="")
                return

    def _count_weekdays(self, weekday):
        weeks_of_month = calendar.monthcalendar(self.year, self.month)
        weekday_count = len(weeks_of_month)
        if weeks_of_month[0][weekday] == 0:
            weekday_count -= 1
        if weeks_of_month[-1][weekday] == 0:
            weekday_count -= 1
        return weekday_count
    
    def clear_duties(self):
        for doctor in self.doctors:
            doctor.clear_duties(self.year, self.month)
            doctor.clear_strain(self.year, self.month)
        for position in self.duty_positions:
            self.duties[position] = {}

    def get_days(self):
        return self.days

    def get_year(self):
        return self.year
    
    def get_month(self):
        return self.month

    def get_duties(self):
        return self.duties

    def get_day(self, number):
        return self.days[number - 1]

    def who_is_on_duty(self, day_number):
        day = self.get_day(day_number)
        duties = {}
        for position in self.duty_positions:
            if day in self.duties[position]:
                duties[position] = self.duties[position][day].get_person()
            else:
                duties[position] = None
        return duties

    def print_duties(self):
        weekday_names = ["Poniedzialek", "Wtorek", "Sroda", "Czwartek", 
                        "Piatek", "Sobota", "Niedziela"]
        for day in self.days:
            on_duty = ""
            for position in self.duty_positions:
                try:
                    on_duty += f"{position:>10}:" \
                        f"{self.duties[position][day].get_person().get_name():<10} "
                except KeyError:
                    pass
            print(f"({day.year:<4}/{day.month:<2}/{day.number:<2})",
                f"{weekday_names[day.weekday]:>12}: {on_duty}")
            if day.weekday == 6:
                print() 
        print()

    def print_statistics(self):
        doctors = self.doctors
        strains = []
        averages = []
        unit_duties = []
        unit_duties_on_weekend = []
        for doctor in doctors:
            doctor_duties = doctor.get_duties(self.year, self.month)
            unit_duties.append(len(doctor_duties))
            holidays = len([duty 
                for duty in doctor_duties
                if duty.get_day().category == 'holiday'])
            strain = doctor.get_strain(self.year, self.month)
            strains.append(strain)
            average = (
                int(strain/len(doctor_duties)) if len(doctor_duties) > 0 else 0)
            averages.append(average)
            duties_on_weekend = len(
                doctor.get_weekends_on_duty(self.year, self.month))
            unit_duties_on_weekend.append(duties_on_weekend)
            print(f"{doctor.name:>12}: dyzury: {len(doctor_duties):<5}",
                f"obciazenie: {strain:>5} (srednio: {average:>3})",
                f"weekendy: {duties_on_weekend:<4}",
                f"({doctor.get_number_of_duties_on_weekends(self.year, self.month)} dyz.)",
                f'swieta: {holidays}')
        print("-"*80)
        print(f"{'SREDNIO':>12}:",
            f"dyzury: {round((sum(unit_duties)/len(unit_duties)), 2):<5}",
            f"obciazenie: {int(sum(strains)/len(strains)):>5}",
            f"(srednio: {int(sum(averages)/len(averages)):>3}) weekendy:",
            f"{round((sum(unit_duties_on_weekend)/len(unit_duties_on_weekend)), 2):<4}")
        print(f"{'SUMA':>12}: dyzury: {sum(unit_duties):<5}",
            f"obciazenie: {sum(strains):>5}")
        print()
        strains.sort()
        strain_delta = strains[len(strains)-1] - strains[0]
        averages.sort()
        averages_delta = averages[len(averages)-1] - averages[0]
        print(f"Suma obciazenia: {sum(strains)}")
        print(f"Rozrzut obciazenia: {strain_delta};",
            f"rozrzut sredniego obciazenia: {averages_delta}")


class EvaluationChart():
    def __init__(self, days, doctor):
        self.doctor = doctor
        self.classification = {}

        for day in days:
            self.classification[day.number] = {
                "day": day, 
                "strain_points": day.strain_points,
            }
    
    def modify_points(self, day_number, points):
        try:
            self.classification[day_number]["strain_points"] += points
        except KeyError:
            pass

    def get_day(self, day_number):
        return self.classification[day_number]

    def get_best(self):
        best_day = min(self.classification.values(), 
            key=lambda x : x["strain_points"])
        best_strain = best_day["strain_points"]

        if best_strain >= 10000:
            return (None, None)

        best_days = [item for item in self.classification.values() if item["strain_points"] == best_strain]
        shuffle(best_days)

        return (best_days[0]["day"], best_days[0]["strain_points"])        
    

class Doctor():
    def __init__(self, name):
        self.name = name
        self.unit = None
        self.duties = {}
        self.strain = {}
        self.max_number_of_duties = {}
        self.exceptions = {}
        self.preferred_days = {}
        self.preferred_weekdays = {}
        self.preferred_positions = {}
        self.locked = False

    def __str__(self):
        return f"{self.name}"

    def get_name(self):
        return self.name
    
    def set_unit(self, unit):
        self.unit = unit

    def evaluate_duties(self, month, position):
        i_have_reached_max_number_of_duties = (
            self.get_number_of_duties_left(month.get_year(), month.get_month()) 
            <= 0)
        if i_have_reached_max_number_of_duties:
            return None

        days_of_month = month.get_days()

        evaluation_chart = EvaluationChart(days_of_month, self)

        self._get_previous_month_modifiers(
            evaluation_chart, month.get_month(), month.get_year())

        for day in days_of_month:

            today = day.number            
            it_is_friday = day.weekday == 4
            it_is_thursday = day.weekday == 3
            it_is_sunday = day.weekday == 6
            it_is_weekend = day.category == 'weekend'

            duty_impossible = (
                evaluation_chart.get_day(today)["strain_points"] >= 10000)
            i_made_exception_for_today = (
                today in self.get_exceptions(day.year, day.month))
            i_dont_take_duties_on_this_weekday = (day.weekday 
                not in self.get_preferred_weekdays(day.year, day.month))
            duty_on_this_position_taken = (month.who_is_on_duty(today)[position]
                is not None)
            i_am_on_duty_on_any_position = (
                self in month.who_is_on_duty(today).values())
            i_dont_take_duties_on_weekends = (
                5 not in self.get_preferred_weekdays(day.year, day.month) 
                and 6 not in self.get_preferred_weekdays(day.year, day.month))
            weekends_i_have_duties_on = (
                self.get_weekends_on_duty(day.year, day.month))
            i_have_duties_on_two_other_weekends = (
                len(weekends_i_have_duties_on) > 1 
                and day.week not in weekends_i_have_duties_on)
            i_have_duties_on_one_other_weekend = (
                len(weekends_i_have_duties_on) == 1 
                and day.week not in weekends_i_have_duties_on)
            i_dont_have_duties_on_two_weekends_yet = (
                len(weekends_i_have_duties_on) < 2)
            i_am_not_on_duty_two_days_ago = (
                self not in month.who_is_on_duty(today - 2).values())

            if duty_impossible:
                continue

            if i_made_exception_for_today:
                evaluation_chart.modify_points(today, MODIFIER_DUTY_IMPOSSIBLE)
                continue

            if i_dont_take_duties_on_this_weekday:
                evaluation_chart.modify_points(today, MODIFIER_DUTY_IMPOSSIBLE)
                continue

            if duty_on_this_position_taken:
                evaluation_chart.modify_points(today, MODIFIER_DUTY_IMPOSSIBLE)

            if i_am_on_duty_on_any_position:
                # Mark decreasing impact on following and preceding day.
                # Prevent double duties.
                evaluation_chart.modify_points(today - 4, MODIFIER_FOUR_DAYS_APART)
                evaluation_chart.modify_points(today - 3, MODIFIER_THREE_DAYS_APART)
                evaluation_chart.modify_points(today - 2, MODIFIER_TWO_DAYS_APART)
                evaluation_chart.modify_points(today - 1, MODIFIER_DUTY_IMPOSSIBLE)
                evaluation_chart.modify_points(today, MODIFIER_DUTY_IMPOSSIBLE)
                evaluation_chart.modify_points(today + 1, MODIFIER_DUTY_IMPOSSIBLE)
                evaluation_chart.modify_points(today + 2, MODIFIER_TWO_DAYS_APART)
                evaluation_chart.modify_points(today + 3, MODIFIER_THREE_DAYS_APART)
                evaluation_chart.modify_points(today + 4, MODIFIER_FOUR_DAYS_APART)

                if it_is_friday:
                    # Sunday is more attractive for those on duty on friday.
                    evaluation_chart.modify_points(today + 2, MODIFIER_FRI_SUN)

                if it_is_thursday:
                    # Don't take duty on saturday, it will ruin your weekend!
                    evaluation_chart.modify_points(today + 2, MODIFIER_THU_SAT)

                continue

            if it_is_thursday and i_dont_take_duties_on_weekends:
                # Day off after thursday wouldn't make any difference.
                evaluation_chart.modify_points(today, MODIFIER_THURSDAY_IS_ORDINARY)

            if it_is_sunday and i_am_not_on_duty_two_days_ago:
                evaluation_chart.modify_points(today, MODIFIER_DONT_STEAL_SUNDAYS)

            if it_is_weekend and i_have_duties_on_two_other_weekends:
                # No one wants more than two weekends on duty.
                evaluation_chart.modify_points(today, MODIFIER_MORE_THAN_TWO_WEEKENDS)

            if it_is_friday and i_have_duties_on_one_other_weekend:
                # Aim for two weekends with three duties: fri+sun and sat.
                evaluation_chart.modify_points(today + 1, MODIFIER_SATURDAY_IF_ONE_WEEKEND)

            if not it_is_weekend and i_dont_have_duties_on_two_weekends_yet:
                # Support the team, take at least two weekends!
                evaluation_chart.modify_points(today, MODIFIER_LESS_THAN_TWO_WEEKENDS)

        #evaluation_chart.print_values("all", position) # TESTING ONLY choice/all

        return evaluation_chart

    def _get_previous_month_modifiers(self, evaluation_chart, this_month, this_year):
        # Applies impact from closing duties of previous month.
        # Same modifiers as in evaluate_duties method.
        previous_month = 12 if this_month == 1 else this_month-1
        year = this_year-1 if this_month == 1 else this_year
        last_month_duties = [duty.get_day().number
            for duty in self.get_duties(year, previous_month)]

        if not last_month_duties:
            return

        previous_month_last_day = calendar.monthrange(year, previous_month)[1]

        modifier = {
            3: MODIFIER_DUTY_IMPOSSIBLE,
            2: MODIFIER_TWO_DAYS_APART,
            1: MODIFIER_THREE_DAYS_APART,
            0: MODIFIER_FOUR_DAYS_APART
        }

        for day in last_month_duties:
            if (previous_month_last_day - day) < 4:
                days_affected = 4 - (previous_month_last_day - day)
                for i in range(1, days_affected+1):
                    evaluation_chart.modify_points(i, modifier[days_affected - i])

    def set_duty(self, year, month, duty):   
        if year not in self.duties.keys():
            self.duties[year] = defaultdict(list)
        self.duties[year][month].append(duty)

    def get_duties(self, year, month):
        try:
            return self.duties[year][month]
        except KeyError:
            return []

    def get_number_of_duties(self, year, month):
        duties = self.get_duties(year, month)
        return len(duties)
    
    def get_weekends_on_duty(self, year, month):
        weekends_on_duty = set(
            duty.get_day().week 
            for duty in self.get_duties(year, month) 
            if duty.get_day().category == 'weekend')
        return weekends_on_duty

    def get_number_of_duties_on_weekends(self, year, month):
        number_of_duties_on_weekends = len(
            [duty 
            for duty in self.get_duties(year, month) 
            if duty.get_day().category == 'weekend'])
        return number_of_duties_on_weekends   
    
    def set_max_number_of_duties(self, year, month, number):
        if year not in self.max_number_of_duties.keys():
            self.max_number_of_duties[year] = {}
        self.max_number_of_duties[year][month] = number
        # Method below keeps max duties in touch with number
        # of days on preferred weekdays.
        self._update_max_number_of_duties(year, month)

    def get_max_number_of_duties(self, year, month):
        try:
            return self.max_number_of_duties[year][month]
        except KeyError:
            return MAX_NUMBER_OF_DUTIES_PER_MONTH

    def get_number_of_duties_left(self, year, month):
        return (self.get_max_number_of_duties(year, month) 
               - self.get_number_of_duties(year, month))

    def set_strain(self, year, month, strain):
        if year not in self.strain.keys():
            self.strain[year] = defaultdict(int)
        self.strain[year][month] += strain

    def get_strain(self, year, month):
        try:
            return self.strain[year][month]
        except KeyError:
            return 0    

    def clear_duties(self, year, month):
        try:
            self.duties[year][month] = []
        except KeyError:
            pass

    def clear_strain(self, year, month):
        try:
            self.strain[year][month] = 0
        except KeyError:
            pass

    def set_exceptions(self, year, month, exception_list):
        if year not in self.exceptions.keys():
            self.exceptions[year] = {}
        self.exceptions[year][month] = exception_list

    def get_exceptions(self, year, month):
        try:
            return self.exceptions[year][month]
        except KeyError:
            return []

    def set_preferred_days(self, year, month, preferred_days_list):
        if year not in self.preferred_days.keys():
            self.preferred_days[year] = {}
        self.preferred_days[year][month] = preferred_days_list

    def get_preferred_days(self, year, month):
        try:
            return self.preferred_days[year][month]
        except KeyError:
            return []
    
    def set_preferred_weekdays(self, year, month, preferred_weekdays_list):
        if year not in self.preferred_weekdays.keys():
            self.preferred_weekdays[year] = {}
        self.preferred_weekdays[year][month] = preferred_weekdays_list
        # Method below keeps max duties in touch with number
        # of days on preferred weekdays.
        self._update_max_number_of_duties(year, month)
    
    def get_preferred_weekdays(self, year, month):
        try:
            return self.preferred_weekdays[year][month]
        except KeyError:
            return [0, 1, 2, 3, 4, 5, 6]
    
    def _update_max_number_of_duties(self, year, month):
        # It may be a problem when setting duties, if a doctor has a high 
        # max number of duties and there are not as many weekdays in month 
        # which he accepts.
        # This function is run whenever max number of duties 
        # or preferred weekdays are set to ensure that max number of duties 
        # is not higher then number of available days.
        preferred_weekdays = self.get_preferred_weekdays(year, month)

        if len(preferred_weekdays) > 3:
            return

        number_of_preferred_weekdays_in_month = 0
        weeks_of_month = calendar.monthcalendar(year, month)

        for weekday in preferred_weekdays:
            weekday_count_in_month = len(weeks_of_month)
            if weeks_of_month[0][weekday] == 0:
                weekday_count_in_month -= 1
            if weeks_of_month[-1][weekday] == 0:
                weekday_count_in_month -= 1
            number_of_preferred_weekdays_in_month += weekday_count_in_month

        if (self.get_max_number_of_duties(year, month) 
                > number_of_preferred_weekdays_in_month):
            self.set_max_number_of_duties(
                year, month, number_of_preferred_weekdays_in_month)

    def set_preferred_positions(self, year, month, position_list):
        if year not in self.preferred_positions.keys():
            self.preferred_positions[year] = {}
        self.preferred_positions[year][month] = position_list

    def get_preferred_positions(self, year, month):
        try:
            return self.preferred_positions[year][month]
        except KeyError:
            return [*range(self.unit.duty_positions)]

    def lock_preferences(self):
        self.locked = True
    
    def is_locked(self):
        return self.locked


class Unit():
    def __init__(self):
        self.doctors = []
        self.duty_positions = 1
        self.monthly_duties = {}

    def add_doctor(self, doctor):
        self.doctors.append(doctor)
        doctor.set_unit(self)

    def get_doctors(self):
        return self.doctors

    def set_duty_positions(self, number):
        self.duty_positions = number

    def create_duties(self, year, month):
        monthly_duties = MonthlyDuties(year, month, self.duty_positions, 
                                      self.doctors)
        monthly_duties.set_duties()
                
        if year not in self.monthly_duties.keys():
            self.monthly_duties[year] = {}
        self.monthly_duties[year][month] = monthly_duties
        
    def print_duties(self, year, month):
        self.monthly_duties[year][month].print_duties()
    
    def print_statistics(self, year, month):
        self.monthly_duties[year][month].print_statistics()
