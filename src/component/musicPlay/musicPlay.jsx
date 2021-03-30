import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getSongUrl } from '@/api/music'
import './musicPlay.scss'

const MusicPlay = (props) => {
  // const [songUrl, setSongUrl] = useState('')
  const audioContext = Taro.getBackgroundAudioManager()

  useEffect(() => {
    // console.log(props, 'xxxprops.xxx')
    if (props.id) {
      getFirstSongUrl(props.id)
    }
  }, [props])


  const getFirstSongUrl = async (id) => {
    try {
      const result = await getSongUrl({ id })
      audioContext.src = result.data[0].url
      audioContext.title = 'test'
      audioContext.play()
    } catch (e) {
      //
    }
  }

  return (
    <View className='music-paly-comp'>
      <View></View>
    </View>
  )
}

export default MusicPlay