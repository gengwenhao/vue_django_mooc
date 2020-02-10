from django.db import models


class Org(models.Model):
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


class Teacher(models.Model):
    """
        课程讲师
    """
    name = models.CharField(max_length=32, null=False, blank=False, verbose_name='讲师名称')
    nick_name = models.CharField(max_length=32, null=True, blank=True, verbose_name='讲师昵称')
    avatar = models.ImageField(upload_to='avatars/%Y/%m/%d', default='default/avatar.png',
                               verbose_name='头像')
    desc = models.TextField(verbose_name='讲师介绍')
    org = models.ManyToManyField(Org, verbose_name='所属机构')

    class Meta:
        db_table = 'geng_teacher'
        verbose_name = '讲师'
        verbose_name_plural = verbose_name
        unique_together = ['name', 'nick_name', 'desc']

    def __str__(self):
        return f'{self.name}'

    def get_nick_name(self):
        return f'{self.nick_name or self.name}'


class Category(models.Model):
    """
        课程类别
    """

    # 分类级别
    INDEX_CHOICES = (
        (1, '一级分类'),
        (2, '二级分类'),
        (3, '三级分类'),
    )

    title = models.CharField(max_length=32, verbose_name='分类名')
    name = models.CharField(max_length=32, null=True, blank=True, verbose_name='分类别名')
    level = models.PositiveSmallIntegerField(default=1, choices=INDEX_CHOICES,
                                             verbose_name='分类级别')
    parent = models.ForeignKey('Category', null=True, blank=True,
                               on_delete=models.DO_NOTHING, verbose_name='上级分类')

    class Meta:
        db_table = 'geng_course_category'
        verbose_name = '分类'
        verbose_name_plural = verbose_name
        unique_together = ['title', 'name']

    def __str__(self):
        return f'{self.get_name()}'

    def get_name(self):
        """
            获取分类名，有别名优先显示别名
        :return:
        """
        return self.name or self.title


class Tag(models.Model):
    """
        课程标签
    """
    name = models.CharField(max_length=32, verbose_name='标签名')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        db_table = 'geng_tag'
        verbose_name = '课程标签'
        verbose_name_plural = verbose_name


class Course(models.Model):
    """
        课程
    """
    title = models.CharField(max_length=32, unique=True, verbose_name='标题')
    cover_img = models.ImageField(upload_to='course/cover/%Y/%m/%d',
                                  default='default/course_cover.png',
                                  verbose_name='课程封面')
    teachers = models.ManyToManyField(to='Teacher', blank=True, verbose_name='讲师')
    sub_title = models.CharField(null=True, blank=True, max_length=32, verbose_name='副标题')
    desc = models.TextField(null=True, blank=True, verbose_name='描述')
    h5_desc = models.TextField(null=True, blank=True, verbose_name='h5格式描述')
    url = models.TextField(null=True, blank=True, verbose_name='课程链接')
    video_url = models.TextField(null=True, blank=True, verbose_name='视频链接(课程只有一个视频时有效)')
    price = models.CharField(max_length=11, default='免费', verbose_name='价格')
    has_activity_price = models.BooleanField(default=False, verbose_name='是否有活动价格')
    activity_price = models.CharField(max_length=11, default='免费', verbose_name='活动价格')
    category = models.ForeignKey('Category', on_delete=models.DO_NOTHING, verbose_name='课程类别')
    tag = models.ManyToManyField('Tag', verbose_name='课程标签')
    has_chapter = models.BooleanField(default=False, verbose_name='是否具有章节')
    chapter = models.ForeignKey('Chapter', null=True, blank=True, on_delete=models.DO_NOTHING,
                                verbose_name='课程的所有章节')

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


class Chapter(models.Model):
    """
        课程章节
    """
    title = models.CharField(max_length=32, unique=True, default='最新章节',
                             verbose_name='章节名称')
    lesson = models.ForeignKey('Lesson', null=True, blank=True,
                               on_delete=models.DO_NOTHING, verbose_name='课时')
    joined_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'geng_chapter'
        get_latest_by = 'index'
        verbose_name = '课程章节'
        verbose_name_plural = verbose_name
        ordering = ['pk']

    def __str__(self):
        return f'{self.title}'


class Lesson(models.Model):
    """
        章节课时
    """
    title = models.CharField(max_length=32, default='最新课时', verbose_name='课时标题')
    joined_item = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'geng_lesson'
        get_latest_by = 'index'
        verbose_name = '课程章节课时'
        verbose_name_plural = verbose_name
        ordering = ['pk']

    def __str__(self):
        return f'{self.pk}.{self.title}'


class BannerNav(models.Model):
    """
        导航
    """
    title = models.CharField(max_length=32, verbose_name='导航名称(5~7个)')
    category = models.ManyToManyField(to='Category', verbose_name='课程分类')
    ordering = models.PositiveIntegerField(default=1, verbose_name='显示顺序')

    class Meta:
        verbose_name = '导航'
        verbose_name_plural = verbose_name
        ordering = ['ordering']

    def __str__(self):
        return f'{self.title}'


class Banner(models.Model):
    """
        轮播图
    """
    title = models.CharField(max_length=32, verbose_name='标题')
    sub_title = models.CharField(max_length=32, null=True, blank=True, verbose_name='副标题')
    ordering = models.PositiveSmallIntegerField(default=1, verbose_name='轮播图序号')
    url = models.URLField(default='/', verbose_name='跳转链接')
    img = models.ImageField(upload_to='banners/%Y/%m/%d', default='default/banner.png',
                            verbose_name='图片（建议尺寸960*425）')

    class Meta:
        db_table = 'geng_banner'
        verbose_name = '轮播图'
        verbose_name_plural = verbose_name
        ordering = ['ordering']

    def __str__(self):
        return f'{self.ordering}.{self.title}-{self.sub_title}'
