from django.urls import path
from . import views

urlpatterns = [
    path('demo-request/', views.DemoRequestCreateView.as_view(), name='demo-request'),
    path('trial-signup/', views.TrialSignupCreateView.as_view(), name='trial-signup'),
    path('faqs/', views.FAQListView.as_view(), name='faq-list'),
    path('testimonials/', views.TestimonialListView.as_view(), name='testimonial-list'),
]
