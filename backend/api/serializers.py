from rest_framework import serializers
from .models import DemoRequest, TrialSignup, FAQ, Testimonial


class DemoRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoRequest
        fields = ['id', 'name', 'email', 'company', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class TrialSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrialSignup
        fields = ['id', 'name', 'email', 'created_at']
        read_only_fields = ['id', 'created_at']


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'order']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'quote', 'author', 'role', 'company', 'order']
