
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import { getSongDetail } from '@/api/common'

import './songList.scss'

const SongList = () => {

  const [songInfo, setSongInfo] = useState()

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
      setSongInfo(result.playlist)
      // console.log(result, '---')
    } catch (e) {
      //
    }
  }
  if (!songInfo) return null

  return (
    <View className='songList'>

      <View className='content'>
        {/* header */}
        <View className='header'>
          <View className='avatar'>
            <Image src={songInfo.coverImgUrl}></Image>
          </View>
          <View className='info'>
            <View className='title'>{songInfo.name}</View>
            {/* <View className='color-666'>av</View> */}
            <View className='ellipsis tip'>{songInfo.description}</View>
          </View>
        </View>
        {/* songList */}
        <View></View>
        {
          songInfo.tracks.map((item, index) => (
            <View
              key={item.id}
              className='song-item'
            >
              <View className='index'>{index + 1}</View>
              <View className='info'>
                <View className='ellipsis'>{item.name}</View>
                {/* <View className='ellipsis'>xxx</View> */}
              </View>
              <View className='icon'>
                <View className='icon1'>...</View>
                <View className='icon2'>1</View>
              </View>
            </View>
          ))
        }

      </View>
    </View>
  )
}

export default SongList