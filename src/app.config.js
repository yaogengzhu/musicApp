export default {
  pages: [
    'pages/home/home',
    'pages/search/search',
    'pages/person/person',
    'pages/login/login',
    'pages/funny/funny',
    'pages/songList/songList', // 歌单
    'pages/recommendResource/recommendResource', // 每日推荐歌单
  ],
  "requiredBackgroundModes": ["audio", "location"],
  tabBar: {
    "list": [{
      "pagePath": "pages/home/home",
      "text": "音乐",
      "iconPath": "./assets/images/shouye.png",
      "selectedIconPath": "./assets/images/selectShouye.png"
    }, {
      "pagePath": "pages/funny/funny",
      "text": "搞笑首页",
      "iconPath": "./assets/images/shouye.png",
      "selectedIconPath": "./assets/images/selectShouye.png"
    }, {
      "pagePath": "pages/search/search",
      "text": "美女图片",
      "iconPath": "./assets/images/img.png",
      "selectedIconPath": "./assets/images/selectImg.png"
    }, {
      "pagePath": "pages/person/person",
      "text": "我的",
      "iconPath": "./assets/images/person.png",
      "selectedIconPath": "./assets/images/selectPerson.png"
    }],
    borderStyle: 'white',
    color: '#ffffff',
    selectedColor: '#fed71a', // 佛手黄
    backgroundColor: '#d43c33' // 蝶翅蓝 #5698c3
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#d43c33',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
