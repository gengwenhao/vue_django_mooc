const state = {
  // 在state中定义的属性可以在各个组件中使用
  appName: 'admin',
  isLogin: true,
  userName: 'gengwenhao',
  banner: [
    {
      title: '零失误穿搭法，10倍提升你的美 ',
      desc: '认识自我、选对单品、游刃场合',
      img: 'http://cms-bucket.ws.126.net/2020/0114/87ea8ac0p00q42qxl00frc000qo00btc.png',
      url: 'http://www.baidu.com'
    },
    {
      title: '让你聪明十倍的高效学习力！ ',
      desc: '哈佛学霸教你颠覆脑力的24个高效学习法',
      img: 'http://cms-bucket.ws.126.net/2020/0108/e0b76fd1p00q3rn4q00dec000qo00btc.png',
      url: 'http://www.gengwenhao.cn'
    }
  ],
  menuCategoryList: [
    {
      categoryName: '个人提升',
      url: 'https://www.gengwenhao.cn',
      categoryItems: [
        {title: '思维方式', url: 'https://gengwenhao.cn'},
        {title: '学习力', url: 'https://gengwenhao.cn'}
      ]
    },
    {
      categoryName: '职业',
      url: 'https://www.gengwenhao.cn',
      categoryItems: [
        {title: '办公软件', url: 'https://gengwenhao.cn'},
        {title: '效率管理', url: 'https://gengwenhao.cn'}
      ]
    },
    {
      categoryName: '读书',
      url: 'https://www.gengwenhao.cn',
      categoryItems: []
    },
    {
      categoryName: '名家课',
      url: 'https://www.gengwenhao.cn',
      categoryItems: []
    },
    {
      categoryName: '亲自',
      url: 'https://www.gengwenhao.cn',
      categoryItems: [
        {title: '育儿', url: 'https://gengwenhao.cn'},
        {title: '启蒙教育', url: 'https://gengwenhao.cn'}
      ]
    }
  ],
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
        }
      ]
    }
  ]
}

export default state