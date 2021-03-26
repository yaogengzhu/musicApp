import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtCard } from "taro-ui"
import fetch from '@/api/index'
import './funny.scss'


export default class Funy extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: [],
      page: 1,
      hasMore: false,
    }

  }
  componentDidMount() {
    this.getList()
  }

  getList() {
    const { page, list } = this.state
    fetch.joke({
      url: '/api/jokes/list',
      params: {
        page: page
      }
    }).then(res => {
      const data = res.data.data
      if (page === 1) {
        this.setState({
          list: data.list,
          hasMore: data.totalPage > page
        })
      } else {
        this.setState({
          list: list.concat(data.list),
          hasMore: data.totalPage > page
        })
      }

    })
  }

  onPullDownRefresh() {
    this.getList()
  }

  onReachBottom() {
    const { page, hasMore } = this.state
    if (hasMore) {
      this.setState({
        page: page + 1
      }, () => {
        this.getList()
      })
    }
  }

  render() {
    const { list, hasMore } = this.state
    if (!list) return null
    return (
      <View className='index'>
        {
          list.map((item, index) => (
            <View
              key={index}
              style={{ marginBottom: '10px' }}
            >
              <AtCard
                title={item.updateTime}

              >
                {item.content}
              </AtCard>
            </View>
          ))
        }
        {
          list.length > 0 &&
          (hasMore
            ? <View style={{ margin: '5px 0 ', width: '100%', fontSize: '12px', textAlign: 'center', color: '#666' }}>上拉加载更多</View>
            : <View style={{ margin: '5px 0 ', width: '100%', fontSize: '12px', textAlign: 'center', color: '#666' }}>没有更多了</View>)
        }

      </View>
    )
  }
}
