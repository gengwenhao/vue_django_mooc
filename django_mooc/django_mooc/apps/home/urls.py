from django.urls import path

from home.views import BannerView, BannerCategoryView, CourseListView

app_name = 'home'
urlpatterns = [
    path('banner/', BannerView.as_view()),
    path('banner_categories/', BannerCategoryView.as_view()),
    path('home_courses/', CourseListView.as_view()),
]
