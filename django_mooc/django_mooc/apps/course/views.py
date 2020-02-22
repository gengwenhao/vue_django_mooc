from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import filters

from course.paginations import *
from course.serializers import *


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    pagination_class = CoursePagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    filterset_fields = ('tag__name', 'tag',)
    search_fields = ('title', 'sub_title', 'category__name', 'category__title')


class FullCourseViewSet(viewsets.GenericViewSet,
                        mixins.RetrieveModelMixin):
    queryset = Course.objects.all()
    serializer_class = FullCourseSerializer
    pagination_class = CoursePagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    filterset_fields = ('tag__name', 'tag',)
    search_fields = ('title', 'sub_title')


class BannerViewSet(viewsets.ModelViewSet):
    """
        轮播图
    """
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer


class BannerNavViewSet(viewsets.ModelViewSet):
    queryset = BannerNav.objects.all()
    serializer_class = NavSerializer
