import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtAvatar } from "taro-ui"

import './person.scss'

const Person = () => {
  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    Taro.getUserInfo({
      success: function (res) {
        setUserInfo(res.userInfo)
      }
    })
  }, [])

  if (!userInfo) return null
  return (
    <View className='person'>
      <View className='avatar'>
        <AtAvatar image={userInfo.avatarUrl} circle size='large' />
      </View>
      <AtList
        hasBorder={false}
        customStyle={{ boxSizing: 'border-box' }}
      >
        <AtListItem title='昵称' extraText={userInfo.nickName} />
        <AtListItem title='地址' extraText={userInfo.city} />
        <AtListItem title='性别' extraText={userInfo.gender === 1 ? '男' : '女'} />
      </AtList>
    </View>

  )
}

export default Person
