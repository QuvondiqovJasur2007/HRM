from django.urls import path
from .views import HomePageView, DashboardView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("/accounts/button/", DashboardView.as_view(), name="button"),
]
