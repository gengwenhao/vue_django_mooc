const state = {
  // 在state中定义的属性可以在各个组件中使用
  appName: 'admin',
  isLogin: true,
  userName: 'gengwenhao',
  banner: [],
  bannerMenu: [],
  categoryList: [
    {
      categoryTitle: '今日秒杀',
      courseList: [
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        }
      ]
    },
    {
      categoryTitle: '经典好课',
      courseList: [
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        }
      ]
    },
    {
      categoryTitle: '经典好课',
      courseList: [
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        }
      ]
    },
    {
      categoryTitle: '经典好课',
      courseList: [
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        },
        {
          title: '0元阅读365本书，3步打造完整知识体系',
          desc: '豆瓣BBC纽约时报好书排行 Top365',
          price: '免费',
          count: 500,
          img: 'http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg?imageView&thumbnail=750y422&quality=95'
        }
      ]
    }
  ]
}

export default state