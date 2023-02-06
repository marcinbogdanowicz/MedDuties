from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Unit, Doctor, DoctorMonthlyData, MonthlyDuties, Duty

admin.site.register(User, UserAdmin)
admin.site.register(Unit)
admin.site.register(Doctor)
admin.site.register(DoctorMonthlyData)
admin.site.register(MonthlyDuties)
admin.site.register(Duty)
