from rest_framework import serializers

from course.models import CourseModel, CourseCategoryModel
from home.models import BannerModel, BannerCategoryModel, HomeCourseListModel


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerModel
        fields = ('id', 'title', 'sub_title', 'index', 'img', 'url')


class BannerCategoryChildrenSerializer(serializers.ModelSerializer):
    """
        轮播图左侧导航条的子类
    """

    class Meta:
        model = CourseCategoryModel
        fields = ('id', 'title', 'name')


class BannerCategorySerializer(serializers.ModelSerializer):
    """
        轮播图左侧导航条
    """
    category = BannerCategoryChildrenSerializer(read_only=True, many=True)

    class Meta:
        model = BannerCategoryModel
        fields = ('title', 'category')


class CourseListChildrenCourseSerializer(serializers.ModelSerializer):
    """
        课程列表中的课程
    """

    class Meta:
        model = CourseModel
        fields = ('title', 'sub_title', 'price', 'cover_img')


class CourseListSerializer(serializers.ModelSerializer):
    """
        首页课程列表
    """
    courses = CourseListChildrenCourseSerializer(read_only=True, many=True)

    class Meta:
        model = HomeCourseListModel
        fields = ('name', 'courses')
