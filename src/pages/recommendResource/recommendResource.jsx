import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getRecommendResource, getSongUrl } from '@/api/music'
// import MusicPlay from '@/component/musicPlay/musicPlay'
import { connect } from 'react-redux'
import MusicItem from '@/component/musicItem/musicItem'

import './recommendResource.scss'


const RecommendResource = (props) => {
  // const { weekData } = props
  const [list, setList] = useState()
  // const [songInfo, setSongInfo] = useState(weekData.slice(-1)[0].song)

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

  useEffect(() => {

  }, [list])

  if (!list) return null
  return (
    <View className='recommendResourcePage'>
      <View className='content'>
        {
          list.map(item => (
            <MusicItem
              key={item.id}
              songInfo={item}
              onChange={() => {
                // setSongInfo(song)
                Taro.navigateTo({
                  url: `/pages/musicRemark/musicRemark?id=${item.id}`
                })
              }}
            />
          ))
        }
      </View>
      {/* <MusicPlay songInfo={songInfo} /> */}
    </View>
  )
}

export default connect((state) => ({
  ...state.music
}))(RecommendResource)