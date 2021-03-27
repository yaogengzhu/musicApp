import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import { connect } from 'react-redux'
import { getUserInfo } from '@/api/user'
import { getBanner, getPersonalized, getHomePageIcon } from '@/api/common'
import auth from '@/api/auth'

import './home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      songList: [],
      iconList: []
    }
  }
  componentDidMount() {
    this.getBanner()
    this.getSongList()
    this.getHomeIcon()
  }

  componentDidShow() {
    auth.checkoutLogin()
  }

  async getBanner() {
    try {
      const result = await getBanner()
      this.setState({
        bannerList: result.banners
      })
    } catch (e) {
      // console.log(e, 'e')
    }
  }

  async getHomeIcon() {
    try {
      const result = await getHomePageIcon()
      // console.log(result, '0-0-0')
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

  async getUserInfo1() {
    try {
      const result = await getUserInfo()
      console.log(result, '---')
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { bannerList, songList, iconList } = this.state
    if (!bannerList) return null
    console.log(songList, '----xxxx---')
    return (
      <View className='home'>
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
      </View>
    )
  }
}


export default connect((state) => ({
  ...state.auth,
  ...state.user
}))(Home)