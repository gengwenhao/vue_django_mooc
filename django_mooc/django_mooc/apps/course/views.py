from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework import mixins

from course.paginations import *
from course.serializers import *


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    pagination_class = CoursePagination
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('tag__name', 'tag',)


class BannerViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer


class BannerNavViewSet(viewsets.ModelViewSet):
    queryset = BannerNav.objects.all()
    serializer_class = NavSerializer
