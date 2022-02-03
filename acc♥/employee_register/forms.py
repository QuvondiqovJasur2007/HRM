from dataclasses import field
import imp
from django import forms
from .models import Employee


class EmployeeForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = ('lastname','firstname','job','position')
        labels = {
            'lastname':'Ism',
            'firstname':'Familiyangiz',
            'job':'Kasbingiz',
            'position':'Unvoningiz'
        }
    def __ini__(self , *args , **kwargs):
        super(EmployeeForm,self).__init__(*args , **kwargs)
        self.files['position'].empty_label = "Select"
        self.files['firstname'].required = False