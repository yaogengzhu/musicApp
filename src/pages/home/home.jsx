import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import { getUserInfo } from '@/api/user'
import { getBanner } from '@/api/common'

import './home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
    }


  }
  componentDidMount() {
    this.getBanner()
    this.getUserInfo1()
  }

  componentDidShow() {

  }

  async getBanner() {
    try {
      const result = await getBanner()
      this.setState({
        bannerList: result.banners
      })
    } catch (e) {
      console.log(e, 'e')
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
        <View>2</View>
        <Button
          onClick={() => {
            // store.dispatch({
            //   type: 'INCREMENT'
            // })
          }}
        >按钮</Button>
      </View>
    )
  }
}


export default connect((state) => ({
  ...state.auth,
  ...state.user
}))(Home)