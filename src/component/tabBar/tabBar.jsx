
import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './tabBar.scss'



const TabBar = (props) => {
  // console.log(props.page)
  const { value } = props
  const [current, setCurrent] = useState(value)

  const handleClick = () => {
    setCurrent(value)
    console.log(value, 'value')
    switch (value) {
      case 0:
        return Taro.redirectTo({
          url: '/pages/home/home'
        })
      case 1:
        return Taro.redirectTo({
          url: '/pages/search/search'
        })
    }
  }
  return (
    <AtTabBar
      fixed
      tabList={[
        { title: '首页', iconType: 'home' },
        { title: '搜索', iconType: 'search' },
        { title: '我的', iconType: 'user' }
      ]}
      current={current}
      onClick={handleClick}
    />
  )
}
export default TabBar

