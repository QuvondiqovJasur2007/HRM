from django.urls import path
from .views import SignUpView, CardsView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path("cards/", CardsView.as_view(), name="cards"),


]

