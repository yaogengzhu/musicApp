import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from "taro-ui"
import fetch from '../../api/index'
import TabBar from '../../component/tabBar/tabBar'
import './home.scss'


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      // list: []
    }
  }

  componentDidMount() {
    fetch.post({
      url: '/login/cellphone',
      params: {
        phone: '15871602731',
        pasword: 'hx19940608..'
      }
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <View className='index'>
        <View> 首页 </View>
        <TabBar value={0} />
      </View>
    )
  }
}
