from django.http import JsonResponse
from django.views import View

from course.models import (
    CourseModel
)


class AddCourseView(View):
    def post(self, request):
        cover_img = request.FILES.get('bigPicUrl')

        CourseModel.objects.create(
            category_id=1,
            title=request.POST.get('title'),
            desc=request.POST.get('description'),
            url=request.POST.get('courseUrl'),
            cover_img=cover_img
        )

        return JsonResponse({'status': 'success'})
