module.exports = {
    base: '/my-blog/',
  title: '佩奇的小黑屋',
  description: '',
  theme: 'reco',
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { 
            text: '其它内容', 
            items: [
                { text: '开源项目模板', link: 'https://gitee.com/dashboard/projects' },
                { text: '掘金', link: 'https://juejin.cn/user/4371313964880878/posts' }
            ]
        }
    ],
    sidebar: [
      {
          title: '指南',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "介绍", path: "/" }
          ]
      },
      // {
      //   title: "基础学习",
      //   path: '/handbook/ConditionalTypes',
      //   collapsable: false, // 不折叠
      //   children: [
      //     { title: "条件类型", path: "/handbook/ConditionalTypes" },
      //     { title: "泛型", path: "/handbook/Generics" }
      //   ],
      // }
    ]
    },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
}