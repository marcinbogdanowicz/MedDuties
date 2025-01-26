from apps.api.models import Doctor, DoctorMonthlyData, Duty, MonthlyDuties, Unit, User
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

admin.site.register(User, UserAdmin)
admin.site.register(Unit)
admin.site.register(Doctor)
admin.site.register(DoctorMonthlyData)
admin.site.register(MonthlyDuties)
admin.site.register(Duty)
