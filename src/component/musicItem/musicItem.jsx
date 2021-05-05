import React from 'react'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


import './musicItem.scss'

const MusicItem = (props) => {
  const { songInfo, onChange } = props


  if (!songInfo) return null

  return (
    <View className='music-item-comp'>
      <View
        className='info'
        onClick={() => {
          onChange && onChange(songInfo)
        }}
      >
        <View className='avatar'>
          <Image
            lazyLoad
            src={songInfo.al.picUrl}
          />
        </View>
        <View className='name-content'>
          <View className='name ellipsis'>{songInfo.name}</View>
          <View className='tip'>{songInfo.al.name}</View>
        </View>
      </View>
      <View className='right-icon'>
        {/* <AtIcon
          value='menu'
          size='30'
        /> */}
      </View>
    </View>
  )
}

export default MusicItem