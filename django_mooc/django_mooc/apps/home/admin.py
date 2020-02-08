from django.contrib import admin

# Register your models here.
from home.models import *


@admin.register(BannerModel)
class BannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'sub_title', 'index']
    ordering = ['index']


@admin.register(BannerCategoryModel)
class BannerAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(HomeCourseListModel)
class CourseListAdmin(admin.ModelAdmin):
    list_display = ['name', 'ordering']
