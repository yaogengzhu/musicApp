export default {
  pages: [
    'pages/home/home',
    'pages/search/search',
    'pages/person/person'
  ],
  tabBar: {
    "list": [{
      "pagePath": "pages/home/home",
      "text": "首页",
      "iconPath": "./assets/images/shouye.png",
      "selectedIconPath": "./assets/images/selectShouye.png"
    }, {
      "pagePath": "pages/search/search",
      "text": "搜索",
      "iconPath": "./assets/images/search.png",
      "selectedIconPath": "./assets/images/selectSearch.png"
    }, {
      "pagePath": "pages/person/person",
      "text": "个人中心",
      "iconPath": "./assets/images/person.png",
      "selectedIconPath": "./assets/images/selectPerson.png"
    }],
    borderStyle: 'white',
    color: '#ffffff',
    selectedColor: '#fed71a', // 佛手黄
    backgroundColor: '#5698c3' // 蝶翅蓝
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#5698c3',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
