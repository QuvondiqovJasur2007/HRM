from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.db import models
from django.forms.models import fields_for_model
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    models = CustomUser
    list_display = [
        "username",
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "company_name",
        "is_staff",
    ]
    fieldsets = UserAdmin.fieldsets + (
        (
            None,
            {
                "fields": (
                    "phone_number",
                    "company_name",
                )
            },
        ),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (
            None,
            {
                "fields": (
                    "phone_number",
                    "company_name",
                )
            },
        ),
    )


admin.site.register(CustomUser, CustomUserAdmin)
