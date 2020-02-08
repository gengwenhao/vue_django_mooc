from django.db import models

from course.models import CourseCategoryModel, CourseModel


class BannerCategoryModel(models.Model):
    """
        首页轮播图左侧的导航栏
    """
    title = models.CharField(max_length=32, verbose_name='导航项名称(5~7个)')
    category = models.ManyToManyField(CourseCategoryModel, verbose_name='关联课程分类(显示两个)')
    index = models.PositiveIntegerField(default=1, verbose_name='显示顺序')

    class Meta:
        verbose_name = '轮播图左侧导航'
        verbose_name_plural = verbose_name
        ordering = ['index']

    def __str__(self):
        return f'{self.title}'


class BannerModel(models.Model):
    """
        首页轮播图
    """
    title = models.CharField(max_length=32, verbose_name='标题')
    sub_title = models.CharField(max_length=32, null=True, blank=True, verbose_name='副标题')
    index = models.PositiveSmallIntegerField(default=1, verbose_name='轮播图序号')
    url = models.URLField(default='/', verbose_name='跳转链接')
    img = models.ImageField(upload_to='banners/%Y/%m/%d', default='default/banner.png',
                            verbose_name='图片（建议尺寸960*425）')

    class Meta:
        db_table = 'geng_banner'
        verbose_name = '轮播图'
        verbose_name_plural = verbose_name
        ordering = ['index']

    def __str__(self):
        return f'{self.index}.{self.title}-{self.sub_title}'


class HomeCourseListModel(models.Model):
    """
        课程列表
    """
    name = models.CharField(max_length=32, verbose_name='列表名称')
    courses = models.ManyToManyField(CourseModel, verbose_name='所有课程')
    ordering = models.PositiveIntegerField(default=1, verbose_name='排序')

    class Meta:
        verbose_name = '首页课程列表'
        verbose_name_plural = verbose_name
        ordering = ['ordering']

    def __str__(self):
        return f'{self.name}'
