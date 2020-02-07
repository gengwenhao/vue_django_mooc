from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from banner.models import BannerModel
from banner.serializers import BannerSerializer


class BannerView(APIView):
    def get(self, request):
        banners = BannerModel.objects.all()
        serializer = BannerSerializer(banners, many=True)
        return JsonResponse(serializer.data, safe=False)
