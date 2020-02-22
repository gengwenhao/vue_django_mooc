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
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('docs/', include_docs_urls('小耿课堂')),
]

# 开发模式
if settings.DEBUG:
    urlpatterns.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))
# 生产模式
else:
    urlpatterns.insert(0, path('', TemplateView.as_view(template_name='index.html')))
