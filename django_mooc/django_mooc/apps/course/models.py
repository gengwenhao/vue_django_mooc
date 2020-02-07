from django.db import models


class OrgModel(models.Model):
    """
        机构
    """
    name = models.CharField(max_length=32, null=False, blank=False, verbose_name='机构名称')

    class Meta:
        db_table = 'geng_org'
        verbose_name = '机构'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f'{self.name}'


class TeacherModel(models.Model):
    """
        讲师
    """
    name = models.CharField(max_length=32, null=False, blank=False, verbose_name='讲师名称')
    nick_name = models.CharField(max_length=32, null=True, blank=True, verbose_name='讲师昵称')
    avatar = models.ImageField(upload_to='avatars/%Y/%m/%d', default='default/avatar.png', verbose_name='头像')
    desc = models.TextField(verbose_name='讲师介绍')
    org = models.ManyToManyField(OrgModel, verbose_name='所属机构')

    class Meta:
        db_table = 'geng_teacher'
        verbose_name = '讲师'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f'{self.name}'

    def get_nick_name(self):
        return f'{self.nick_name or self.name}'


class CourseModel(models.Model):
    """
        课程
    """
    title = models.CharField(max_length=32, verbose_name='标题')
    sub_title = models.CharField(max_length=32, verbose_name='副标题')
    desc = models.TextField(verbose_name='描述')
    price = models.CharField(max_length=11, default='免费', verbose_name='价格')
    has_activity_price = models.BooleanField(default=False, verbose_name='是否有活动价格')
    activity_price = models.CharField(max_length=11, default='免费', verbose_name='活动价格')

    class Meta:
        db_table = 'geng_course'
        verbose_name = '课程'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f'{self.title} - {self.sub_title} - 价格:{self.get_price()}'

    def get_price(self):
        """
            有活动获取活动价格，否则获取正常价格
        :return:
        """
        return self.activity_price if self.has_activity_price else self.price
