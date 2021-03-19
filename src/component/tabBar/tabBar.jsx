
import React, { useState } from 'react'
import { AtTabBar } from 'taro-ui'
import '../tabBar.scss'



const TabBar = () => {
  const [current, setCurrent] = useState(0)

  const handleClick = (value) => {
    setCurrent(value)
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

