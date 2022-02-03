
from django import contrib
from django import urls
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.views.generic.base import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls",)),
    path("accounts/", include("django.contrib.auth.urls")),
    path("", include("pages.urls")),
    path('employee/', include('employee_register.urls'))
]
