from rest_framework import generics

from course.models import *
from course.paginations import *
from course.serializers import *


class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    pagination_class = CoursePagination


class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer


class BannerNavListView(generics.ListAPIView):
    queryset = BannerNav.objects.all()
    serializer_class = NavSerializer
