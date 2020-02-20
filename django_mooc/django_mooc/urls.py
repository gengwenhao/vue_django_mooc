"""django_mooc URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from course import views

# 注册view set
router = routers.DefaultRouter()
router.register('course', views.CourseViewSet)
router.register('full_course', views.FullCourseViewSet)
router.register('banner', views.BannerViewSet)
router.register('banner_nav', views.BannerNavViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('docs/', include_docs_urls('小耿课堂')),
]

if settings.DEBUG:
    # urlpatterns.insert(0, path('', TemplateView.as_view(template_name='index.html')))
    urlpatterns.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))
