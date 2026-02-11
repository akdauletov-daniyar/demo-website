from django.contrib import admin
from .models import DemoRequest, TrialSignup, FAQ, Testimonial


@admin.register(DemoRequest)
class DemoRequestAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'company', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'email', 'company']


@admin.register(TrialSignup)
class TrialSignupAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'email']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'order']
    list_editable = ['order']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['author', 'company', 'order']
    list_editable = ['order']
