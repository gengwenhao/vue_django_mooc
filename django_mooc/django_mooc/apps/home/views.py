from django.http import JsonResponse
from rest_framework.views import APIView

from home.models import BannerModel, BannerCategoryModel, HomeCourseListModel
from home.serializers import CourseListSerializer, BannerSerializer, BannerCategorySerializer


class BannerView(APIView):
    def get(self, request):
        banners = BannerModel.objects.all()
        serializer = BannerSerializer(banners, many=True)

        return JsonResponse(serializer.data, safe=False)


class BannerCategoryView(APIView):
    def get(self, request):
        banner_categories = BannerCategoryModel.objects.all()
        serializer = BannerCategorySerializer(banner_categories, many=True)

        return JsonResponse(serializer.data, safe=False)


class CourseListView(APIView):
    """
        主页课程内容
    """

    def get(self, request):
        banner_categories = HomeCourseListModel.objects.all()
        serializer = CourseListSerializer(banner_categories, many=True)

        return JsonResponse(serializer.data, safe=False)
