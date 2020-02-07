from django.contrib import admin

# Register your models here.
from banner.models import BannerModel


@admin.register(BannerModel)
class BannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'sub_title', 'index']
    ordering = ['index']
