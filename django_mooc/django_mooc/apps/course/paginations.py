from rest_framework import pagination


class CoursePagination(pagination.PageNumberPagination):
    """
        课程分页
    """
    page_size = 10
    page_size_query_param = 'page_size'
