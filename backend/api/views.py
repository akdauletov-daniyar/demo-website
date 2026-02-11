from rest_framework import generics, status
from rest_framework.response import Response
from .models import DemoRequest, TrialSignup, FAQ, Testimonial
from .serializers import (
    DemoRequestSerializer,
    TrialSignupSerializer,
    FAQSerializer,
    TestimonialSerializer,
)


class DemoRequestCreateView(generics.CreateAPIView):
    queryset = DemoRequest.objects.all()
    serializer_class = DemoRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"message": "Demo request submitted successfully!"},
            status=status.HTTP_201_CREATED,
        )


class TrialSignupCreateView(generics.CreateAPIView):
    queryset = TrialSignup.objects.all()
    serializer_class = TrialSignupSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"message": "Trial signup successful!"},
            status=status.HTTP_201_CREATED,
        )


class FAQListView(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
