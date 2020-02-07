from django.db import models

from course.models import CourseModel


class BannerModel(models.Model):
    """
        轮播图
    """
    title = models.CharField(max_length=32, verbose_name='标题')
    sub_title = models.CharField(max_length=32, null=True, blank=True, verbose_name='副标题')
    index = models.PositiveSmallIntegerField(default=1, verbose_name='轮播图序号')
    course = models.ForeignKey(CourseModel, null=True, blank=True, on_delete=models.DO_NOTHING,
                               verbose_name='关联课程')
    img = models.ImageField(upload_to='banners/%Y/%m/%d', default='default/banner.png',
                            verbose_name='图片（建议尺寸960*425）')

    class Meta:
        db_table = 'geng_banner'
        verbose_name = '轮播图'
        verbose_name_plural = verbose_name
        ordering = ['index']

    def __str__(self):
        return f'{self.index}.{self.title}-{self.sub_title}'
