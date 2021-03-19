import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtCard } from "taro-ui"
import fetch from '../../api/index'
import TabBar from '../../../src/component/tabBar/tabBar'
import './index.scss'


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch.post({
      url: '/top/album'
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <View className='index'>
        {
          this.state.list.map(item => (
            <AtCard
              extraStyle={{ marginBottom: '10px' }}
              key={item.id}
              note='笑话'
              extra={item.ct}
              title={item.title}
              thumb={item.img}
            >
              <Image src={item.img} className='img'></Image>
              <View>{item.title}</View>
            </AtCard>
          ))
        }

        <TabBar />
      </View>
    )
  }
}
