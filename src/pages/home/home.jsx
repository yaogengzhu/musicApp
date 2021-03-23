import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import shouye from '@/assets/images/shouye.svg'
import fetch from '../../api/index'
import './home.modules.scss'


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
        <Image src={shouye}></Image>
      </View>
    )
  }
}
