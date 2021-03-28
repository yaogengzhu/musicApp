
import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import { getSongDetail } from '@/api/common'

import './songList.scss'

const SongList = () => {

  useEffect(() => {
    // console.log(Taro.getCurrentInstance().router)
    const id = Taro.getCurrentInstance().router.params.id
    if (id) {
      getSongListDetail(id)
    }

  }, [])

  const getSongListDetail = async (id) => {
    try {
      const result = await getSongDetail({ id })
      console.log(result, '---')
    } catch (e) {
      //
    }
  }
  return (
    <View className='songList'>
      {/* header */}
      <View className='content'>
        <View className='header'>
          <View className='avatar'>
            <Image></Image>
          </View>
          <View className='info'>
            <View className='title'>哈哈哈哈哈</View>
            <View className='color-666'>av</View>
            <View className='color-666'>风格</View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SongList