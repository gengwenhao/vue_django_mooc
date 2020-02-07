from rest_framework import serializers

from banner.models import BannerModel


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerModel
        fields = ('id', 'title', 'sub_title', 'index', 'img')
