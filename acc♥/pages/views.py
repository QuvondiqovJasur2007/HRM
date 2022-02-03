from re import template
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


class DashboardView(TemplateView):
    template_name = "buttons.html"
