from django.urls import path
from .views import SignUpView, CardsView, DashboardView

urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path("cards/", CardsView.as_view(), name="cards"),
    path("button/", DashboardView.as_view(), name="button"),
]
