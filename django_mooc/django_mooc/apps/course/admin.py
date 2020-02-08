from django.contrib import admin

from course.models import *


@admin.register(CourseCategoryModel)
class CourseCategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'level', 'parent']
    ordering = ['level']


@admin.register(CourseModel)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'sub_title', 'desc',
                    'url', 'video_url', 'has_chapter',
                    'price', 'has_activity_price',
                    'activity_price']
    search_fields = ['title', 'sub_title', 'desc']
    ordering = ['title', 'sub_title', 'price']


@admin.register(OrgModel)
class OrgAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(TeacherModel)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ['name', 'nick_name', 'desc']
    search_fields = ['name', 'nick_name']
    ordering = ['name', 'nick_name']


@admin.register(ChapterModel)
class ChapterAdmin(admin.ModelAdmin):
    list_display = ['title']


