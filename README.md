# 仿写网易云音乐基础版

## 技术要点
- [x] `tarojs`
- [x] `trro-ui`
- [x] `react`
- [x] `redux` `redux-redux`

## 小程序线上体验码
**注** 开发中，目前是简单的基础架构、可使用网易云账号进行登陆。

### 体验码
> 有啥问题，可以加我私人微信，一起学习进步！这个项目较大，也可以一起参与开发学习，小程序开发的经验不是很足，开发一个小程序demo，帮助自己学习，同时也希望帮助到正在学习的你。

线上码
<image src='https://user-images.githubusercontent.com/42566669/113113755-354f9380-923d-11eb-87c8-f5c07fccc119.jpg' width="300"  />
个人微信
<image src='https://user-images.githubusercontent.com/42566669/113114192-aabb6400-923d-11eb-9927-16be9bab5cfb.jpeg' width="250" />

## 后台服务
后台服务是基于 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 提供接口，部署在阿里云上。采用node + nginx部署，有兴趣的可以自行了解。

## 目前项目的基础目录结构

```md
├── README.md
├── babel.config.js
├── config
│   ├── dev.js
│   ├── index.js
│   └── prod.js
├── dist
│   ├── app.js
│   ├── app.js.map
│   ├── app.json
│   ├── app.wxss
│   ├── assets
│   │   └── images
│   ├── base.wxml
│   ├── common.js
│   ├── common.js.map
│   ├── common.wxss
│   ├── comp.js
│   ├── comp.js.map
│   ├── comp.json
│   ├── comp.wxml
│   ├── pages
│   │   ├── funny
│   │   ├── home
│   │   ├── login
│   │   ├── person
│   │   ├── recommendResource
│   │   ├── search
│   │   └── songList
│   ├── project.config.json
│   ├── runtime.js
│   ├── runtime.js.map
│   ├── taro.js
│   ├── taro.js.map
│   ├── utils.wxs
│   ├── vendors.js
│   └── vendors.js.map
├── package-lock.json
├── package.json
├── project.config.json
├── project.private.config.json
├── sitemap.json
├── src
│   ├── api
│   │   ├── auth.js
│   │   ├── common.js
│   │   ├── index.js
│   │   ├── music.js
│   │   └── user.js
│   ├── app.config.js
│   ├── app.js
│   ├── app.scss
│   ├── assets
│   │   ├── css
│   │   └── images
│   ├── component
│   │   ├── musicItem
│   │   ├── musicPlay
│   │   └── tabBar
│   ├── index.html
│   ├── pages
│   │   ├── funny
│   │   ├── home
│   │   ├── login
│   │   ├── musicCalendar
│   │   ├── person
│   │   ├── recommendResource
│   │   ├── search
│   │   └── songList
│   ├── store
│   │   ├── actionType.js
│   │   ├── index.js
│   │   ├── reducer
│   │   └── reducer.js
│   └── utils
│       ├── area.js
│       └── system.js
```

## 已经实现的页面

### 主要页面
- [x] 登陆
- [x] 首页
- [x] 个人中心
- [x] 推荐歌单

其他相关
- [x] 搞笑
- [x] 美女图片

### 其他组件、api
- [x] 音乐播放封装
- [x] api封装、接口封装
- [x] redux封装

## 基本页面展示 （将持续开发中)

## 项目的初始化
具体参考[tarojs文档](!https://taro-docs.jd.com/taro/docs/README)
### cli工具安装
```bash
npm install -g @tarojs/cli
或者使用 yarn 方式
yarn global add @tarojs/cli
```
### 使用taro命令初始化项目
```bash
taro init newApp
```
###  初始化完成后,安装相关依赖
```bash
npm install 
or 
npm i
```
### 运行项目

需要在微信开发者平台，注册自己的小程序，拿到appid, 使用微信开发者工具打开自己的项目。运行一下命令，可以看到相应的UI页面了
  ```bash
  npm run dev:weapp
  ```

- 完成以上步骤，项目初始化已经完成

## taro-ui的使用
具体可以参考 [taro-ui官方文档](!https://taro-ui.jd.com/#/docs/quickstart),
本次项目采用按需引用.
```bash
npm install taro-ui
```

### 使用demo
```jsx
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtAvatar } from "taro-ui" // 按需引入
import { getUserInfo } from '@/api/user'
import './person.scss'

const Person = () => {
  const [profile, setProfile] = useState()
  useEffect(() => {
    getaccountInfo()
  }, [])

  const getaccountInfo = async () => {
    const result = await getUserInfo()
    setProfile(result.profile)
  }

  if (!profile) return null
  return (
    <View className='person'>
      <View className='person-bg' style={{ background: `url(${profile.backgroundUrl})`, backgroundSize: 'cover' }}>
        <View className='avatar'>
          <AtAvatar image={profile.avatarUrl} circle size='large' />
        </View>
        <View className='signature'>{profile.signature}</View>
      </View>
      <AtList
        hasBorder={false}
        customStyle={{ boxSizing: 'border-box' }}
      >
        <AtListItem title='昵称' extraText={profile.nickname} />
        {/* <AtListItem title='地址' /> */}
        <AtListItem title='性别' extraText={profile.gender ? '男' : '女'} />
      </AtList>
    </View>

  )
}

export default Person
```
### 按需引入需要引入CSS
可以在src文件下新建一个文件目录
- src
  - assets
    - css
      - modules.scss

### 引入taro-ui css
```css
@import "~taro-ui/dist/style/components/card.scss";
@import "~taro-ui/dist/style/components/avatar.scss";
@import "~taro-ui/dist/style/components/list.scss";

```
### 将css 模块引入到app.scss中

```css
@import "@/assets/css/module.scss";
```


## 请求的封装

## 引入redux


## api的封装处理

## 登陆、cookie鉴权


## 全局loading处理


## 相关辅助库
- ahooks
- dayjs