from rest_framework import pagination


class CoursePagination(pagination.PageNumberPagination):
    """
        课程分页
    """
    page_size = 30
