from django.urls import reverse_lazy
from django.views.generic import CreateView, TemplateView
from .forms import CustomUserCreationForm


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"


class CardsView(TemplateView):
    template_name = "cards.html"


class DashboardView(TemplateView):
    template_name = "buttons.html"
