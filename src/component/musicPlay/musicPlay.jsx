import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getSongUrl } from '@/api/music'
import './musicPlay.scss'

const MusicPlay = (props) => {
  const [songInfo, setSongInfo] = useState()
  const audioContext = Taro.getBackgroundAudioManager()

  useEffect(() => {
    console.log(props, 'xxxprops.xxx')
    if (props.songInfo) {
      setSongInfo(props.songInfo)
      console.log(props.songInfo.id, 'props.song.id')
      getFirstSongUrl(props.songInfo.id)
    }
  }, [props])


  const getFirstSongUrl = async (id) => {
    try {
      const result = await getSongUrl({ id })
      audioContext.src = result.data[0].url
      audioContext.title = props.songInfo.name
      // 
    } catch (e) {
      //
    }
  }

  const playAudio = () => {
    audioContext.play()
  }
  if (!songInfo) return <View className='music-paly-comp' style={{ color: '#999', justifyContent: 'center' }}>加载中...</View>
  return (
    <View className='music-paly-comp'>
      <View className='info'>
        <View className='img'>
          <Image src={songInfo.al.picUrl}></Image>
        </View>
        <View className='title ellipsis'>{songInfo.al.name}</View>
      </View>
      <View className='playIcon' onClick={() => playAudio()}>播放</View>
    </View>
  )
}

export default MusicPlay