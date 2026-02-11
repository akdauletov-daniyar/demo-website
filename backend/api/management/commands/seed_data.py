from django.core.management.base import BaseCommand
from api.models import FAQ, Testimonial


class Command(BaseCommand):
    help = 'Seed database with initial FAQ and testimonial data'

    def handle(self, *args, **options):
        # Clear existing
        FAQ.objects.all().delete()
        Testimonial.objects.all().delete()

        faqs = [
            {
                "question": "What is NovaTech Platform?",
                "answer": "NovaTech is an all-in-one SaaS platform that helps businesses streamline operations, automate workflows, and gain real-time insights through powerful analytics and AI-driven tools.",
                "order": 1,
            },
            {
                "question": "How long does onboarding take?",
                "answer": "Most teams are up and running within 48 hours. Our dedicated onboarding specialists guide you through setup, data migration, and team training at no extra cost.",
                "order": 2,
            },
            {
                "question": "Can I integrate with my existing tools?",
                "answer": "Absolutely! NovaTech integrates with 200+ popular tools including Slack, Salesforce, HubSpot, Jira, Google Workspace, and more. Our REST API also allows custom integrations.",
                "order": 3,
            },
            {
                "question": "Is there a free trial available?",
                "answer": "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required. You can upgrade, downgrade, or cancel at any time.",
                "order": 4,
            },
            {
                "question": "How does pricing work?",
                "answer": "We offer three tiers — Starter, Pro, and Enterprise — billed monthly or annually (save 20%). Each plan scales with your team size and usage needs.",
                "order": 5,
            },
            {
                "question": "What kind of support do you offer?",
                "answer": "All plans include email support with a 24-hour response time. Pro includes live chat and priority support. Enterprise customers get a dedicated account manager and 24/7 phone support.",
                "order": 6,
            },
        ]

        for faq in faqs:
            FAQ.objects.create(**faq)

        testimonials = [
            {
                "quote": "NovaTech transformed how our team collaborates. We cut project delivery time by 40% in the first quarter alone.",
                "author": "Sarah Chen",
                "role": "VP of Engineering",
                "company": "TechFlow Inc.",
                "order": 1,
            },
            {
                "quote": "The analytics dashboard gives us insights we never had before. It's like having a data scientist on the team 24/7.",
                "author": "Marcus Johnson",
                "role": "Head of Operations",
                "company": "ScaleUp Labs",
                "order": 2,
            },
            {
                "quote": "Switching to NovaTech was the best decision we made this year. The ROI was visible within the first month.",
                "author": "Emily Rodriguez",
                "role": "CEO",
                "company": "BrightPath Solutions",
                "order": 3,
            },
            {
                "quote": "The automation features saved our team 20 hours per week. We can now focus on what actually matters — building great products.",
                "author": "David Park",
                "role": "Product Manager",
                "company": "InnoVerse",
                "order": 4,
            },
        ]

        for t in testimonials:
            Testimonial.objects.create(**t)

        self.stdout.write(self.style.SUCCESS(
            f'Seeded {len(faqs)} FAQs and {len(testimonials)} testimonials'
        ))
