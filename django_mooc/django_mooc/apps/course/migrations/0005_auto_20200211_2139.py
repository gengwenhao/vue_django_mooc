# Generated by Django 3.0.1 on 2020-02-11 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0004_auto_20200210_2335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='org',
            field=models.ManyToManyField(blank=True, to='course.Org', verbose_name='所属机构'),
        ),
    ]
