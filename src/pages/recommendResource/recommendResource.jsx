import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { getRecommendResource } from '@/api/music-calendar'

const RecommendResource = () => {
  const [list, setList] = useState()

  useEffect(() => {
    getSongResource()
  }, [])
  const getSongResource = async () => {
    try {
      const result = await getRecommendResource()
      console.log(result)
    } catch (e) {
      //
    }
  }
  return (
    <View>歌单</View>
  )
}

export default RecommendResource