from rest_framework import serializers

from course.models import *


class CourseSerializer(serializers.ModelSerializer):
    """
        课程列表中的课程
    """

    class Meta:
        model = Course
        fields = '__all__'


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    """
        轮播图左侧导航条的子类
    """

    class Meta:
        model = Category
        fields = '__all__'


class NavSerializer(serializers.ModelSerializer):
    """
        导航
    """
    category = CategorySerializer(read_only=True, many=True)

    class Meta:
        model = BannerNav
        fields = '__all__'
