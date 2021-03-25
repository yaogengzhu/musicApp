import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import fetch from '@/api/index'
import './home.scss'


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      bannerList: []
    }

  }
  componentDidMount() {
    this.getBanner()
  }

  getBanner() {
    fetch.$fetch({
      url: '/banner',
      params: {
        type: 2
      }
    }).then(res => {
      console.log(res)
      this.setState({
        bannerList: res.banners
      })
    })
  }

  onPullDownRefresh() {

  }

  onReachBottom() {

  }

  render() {
    const { bannerList } = this.state
    if (!bannerList) return null

    return (
      <View className='index'>
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
                  <Image src={item.pic} className='banner'></Image>
                </View>
              </SwiperItem>
            ))
          }

        </Swiper>
      </View>
    )
  }
}
