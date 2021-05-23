import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtAvatar } from "taro-ui"
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
        <AtListItem title='手机号'extraText={profile.shortUserName} />
        <AtListItem title='性别' extraText={profile.gender ? '男' : '女'} />
      </AtList>
    </View>

  )
}

export default Person
