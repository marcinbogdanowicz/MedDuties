# Generated by Django 4.1.2 on 2025-02-20 13:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_duty_week_remove_duty_weekday'),
    ]

    operations = [
        migrations.RenameField(
            model_name='duty',
            old_name='user_set',
            new_name='set_by_user',
        ),
    ]
