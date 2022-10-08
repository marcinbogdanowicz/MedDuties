from collections import defaultdict

def holidays():
    holidays = {}
    for year in range(2022, 2033):
        holidays[year] = defaultdict(list)
        holidays[year][1] = [1, 6]
        holidays[year][5] = [1, 3]
        holidays[year][8] = [15]
        holidays[year][11] = [1, 11]
        holidays[year][12] = [24, 25, 26, 31]

    # Easter
    holidays[2022][4] += [16, 17, 18]
    holidays[2023][4] += [8, 9, 10]
    holidays[2024][3] += [30, 31]
    holidays[2024][4] += [1]
    holidays[2025][4] += [19, 20, 21]
    holidays[2026][4] += [4, 5, 6]
    holidays[2027][3] += [27, 28, 29]
    holidays[2028][4] += [15, 16, 17]
    holidays[2029][3] += [31]
    holidays[2029][4] += [1, 2]
    holidays[2030][4] += [20, 21, 22]
    holidays[2031][4] += [12, 13, 14]
    holidays[2032][3] += [27, 28, 29]

    # Feast of Corpus Christi (Boze Cialo) + following weekend
    holidays[2022][6] += [16, 17, 18, 19]
    holidays[2023][6] += [8, 9, 10, 11]
    holidays[2024][5] += [30, 31]
    holidays[2024][6] += [1, 6]
    holidays[2025][6] += [19, 20, 21, 22]
    holidays[2026][6] += [4, 5, 6, 7]
    holidays[2027][5] += [27, 28, 29, 30]
    holidays[2028][6] += [15, 16, 17, 18]
    holidays[2029][5] += [31]
    holidays[2029][6] += [1, 2, 3]
    holidays[2030][6] += [20, 21, 22, 23]
    holidays[2031][6] += [12, 13, 14, 15]
    holidays[2032][5] += [27, 28, 29, 30]

    # "Long weekend" in May
    holidays[2022][4] += [30]
    holidays[2022][5] += [2]
    holidays[2023][4] += [29, 30]
    holidays[2023][5] += [2]
    holidays[2024][5] += [2, 4, 5]
    holidays[2025][5] += [2, 4]
    holidays[2026][5] += [2]
    holidays[2027][5] += [2]
    holidays[2028][4] += [29, 30]
    holidays[2028][5] += [2]
    holidays[2029][5] += [2]
    holidays[2030][5] += [2, 4 ,5]
    holidays[2031][5] += [2, 4]
    holidays[2032][5] += [2]

    # Other possible long weekends (1.1, 1.6, 11.1, 11.11)
    # Christmas is excluded as there is too much nerves
    # about 24th, 25th, 26th already.
    holidays[2022][1] += [7]
    holidays[2022][10] += [31]
    holidays[2025][11] += [10]
    holidays[2026][1] += [2, 5]
    holidays[2027][11] += [12]
    holidays[2028][1] += [7]
    holidays[2029][11] += [2]
    holidays[2031][11] += [10]
    holidays[2032][1] += [2, 5]
    holidays[2032][11] += [12]

    return holidays