import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import { connect } from 'react-redux'
import MusicPlay from '@/component/musicPlay/musicPlay'
import { getBanner, getPersonalized, getHomePageIcon } from '@/api/common'
import { getUserPlayRecord } from '@/api/music'
import auth from '@/api/auth'

import './home.scss'
import MusicCalendarItem from './modules/musicCalenderItem'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      songList: [],
      iconList: [],
      songInfo: null,
    }
  }
  componentDidMount() {
    if (auth.checkoutToke()) {
      this.getBanner()
      this.getSongList()
      this.getHomeIcon()
    }
  }

  componentDidShow() {
    auth.checkoutLogin()
    if (auth.checkoutToke()) {
      this.getUserCurrnetSong()
    }
  }

  async getBanner() {
    try {
      const result = await getBanner()
      this.setState({
        bannerList: result.banners
      })
    } catch (e) {
    }
  }

  async getHomeIcon() {
    try {
      const result = await getHomePageIcon()
      this.setState({
        iconList: result.data
      })
    } catch (e) {

    }
  }

  async getSongList() {
    try {
      const res = await getPersonalized()
      console.log(res)
      this.setState({
        songList: res.result
      })
    } catch (e) {
      //
    }
  }

  async jumpToSongListDetail(item) {
    Taro.navigateTo({
      url: `/pages/songList/songList?id=${item.id}`
    })
  }

  async getUserCurrnetSong() {
    try {
      const result = await getUserPlayRecord()
      const { weekData } = result
      console.log(weekData.slice(-1), 'xx')
      if (weekData && weekData.length > 0) {
        this.setState({
          songInfo: weekData.slice(-1)[0].song
        })
      }

    } catch (e) {

    }
  }

  cliclRecommend(item) {
    if (item.name === '每日推荐') {
      return Taro.navigateTo({
        url: '/pages/recommendResource/recommendResource'
      })
    }

    Taro.navigateTo({
      url: '/pages/test/test'
    })

  }

  render() {
    const { bannerList, songList, iconList, songInfo } = this.state

    if (!bannerList) return null
    return (
      <View className='home'>
        <View className='content'>
          <View className='swiper'>
            <Swiper
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay
            >
              {
                bannerList.map(item => (
                  <SwiperItem
                    key={item.targetId}
                  >
                    <View className='imgBox'>
                      <Image
                        lazyLoad
                        src={item.pic}
                        className='banner'
                      />
                    </View>
                  </SwiperItem>
                ))
              }

            </Swiper>
          </View>
          {/* 每日推荐 */}
          <ScrollView
            scrollX
          >
            <View className='menu' id='better-scroll_box'>
              {
                iconList.map(item => (
                  <View
                    key={item.id}
                    className='item'
                    onClick={() => this.cliclRecommend(item)}
                  >
                    <View className='icon-bg'>
                      <Image
                        lazyLoad
                        src={item.iconUrl}
                      />
                    </View>
                    <View className='tip'>{item.name}</View>
                  </View>
                ))
              }

            </View>
          </ScrollView>
          {/*  */}
          <View className='line'></View>
          <View className='block1'>
            <View>推荐歌单</View>
          </View>
          <ScrollView
            scrollX
          >
            <View className='songlist'>
              {
                songList.map(item => (
                  <View
                    className='item'
                    key={item.id}
                    onClick={() => this.jumpToSongListDetail(item)}
                  >
                    <View className='img'>
                      <Image
                        lazyLoad
                        src={item.picUrl}
                      />
                    </View>
                    <View className='text ellipsis-2'>
                      {item.name}
                    </View>
                  </View>
                ))
              }
            </View>
          </ScrollView>
          <View className='space'></View>
          <MusicCalendarItem />
        </View>
        <MusicPlay songInfo={songInfo} />
      </View>
    )
  }
}


export default connect((state) => ({
  ...state.auth,
  ...state.user,
  ...state.music
}))(Home)