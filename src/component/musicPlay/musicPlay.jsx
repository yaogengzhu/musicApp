import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getSongUrl } from '@/api/music'
import { AtIcon } from 'taro-ui'

import './musicPlay.scss'

const innerAudioContext = Taro.createInnerAudioContext()

const MusicPlay = (props) => {
  const [songInfo, setSongInfo] = useState()
  const [paly, setPaly] = useState(false)

  useEffect(() => {
    if (props.songInfo) {
      console.log(props.songInfo)
      setSongInfo(props.songInfo)
      getFirstSongUrl(props.songInfo.id)
    }
  }, [props])


  const getFirstSongUrl = async (id) => {
    try {
      const result = await getSongUrl({ id })
      console.log(result, 'eee')
      innerAudioContext.src = result.data[0].url
      // ios上是静音的情况下要发出声音需要加上
      innerAudioContext.obeyMuteSwitch = false
    } catch (e) {
      //
    }
  }

  const playAudio = () => {
    innerAudioContext.play()
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
      setPaly(true)
    })

  }

  const pausedAudio = () => {

    innerAudioContext.pause()
    innerAudioContext.onPause(() => {
      setPaly(false)
      console.log('暂停xxxxd播放')
    })
  }
  if (!songInfo) return <View className='music-paly-comp' style={{ color: '#999', justifyContent: 'center' }}>加载中...</View>
  return (
    <View className='music-paly-comp'>
      <View className='info'>
        <View className='img'>
          <Image src={songInfo.al.picUrl}></Image>
        </View>
        <View className='title ellipsis'>{songInfo.name}</View>
      </View>
      {
        paly
          ? <View className='playIcon' onClick={() => pausedAudio()}>
            <AtIcon value='pause' size='30' color='#F00'></AtIcon>
          </View>
          : <View className='playIcon' onClick={() => playAudio()}>
            <AtIcon value='play' size='30' color='#F00'></AtIcon>
          </View>
      }

    </View>
  )
}

export default MusicPlay