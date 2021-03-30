import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getRecommendResource, getSongUrl } from '@/api/music'

const audioContext = Taro.getBackgroundAudioManager()


const RecommendResource = () => {
  const [list, setList] = useState()

  useEffect(() => {
    getSongResource()
  }, [])
  const getSongResource = async () => {
    try {
      const result = await getRecommendResource()
      setList(result.data.dailySongs)

    } catch (e) {
      //
    }
  }

  const getMusicUrl = async (id) => {
    try {
      // return 'https://music.163.com/#/song?id=1431915032'
      const result = await getSongUrl({ id })
      console.log(result.data[0].url, '---xxx-')
      console.log(audioContext, 'audioContext')
      audioContext.src = result.data[0].url
      audioContext.title = 'test'
      audioContext.play()
    } catch (e) {
      //
    }
  }

  useEffect(() => {
    if (list && list.length > 0) {
      const id = list[0].id
      console.log(id)
      getMusicUrl(id)
    }
  }, [list])

  return (
    <View>
      <View>歌单</View>
    </View>
  )
}

export default RecommendResource