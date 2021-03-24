import React, { Component } from 'react'
// import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard } from "taro-ui"

import fetch from '../../api/index'
import './home.scss'


export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: [],
      page: 1,
      hasMore: false
    }

  }
  componentDidMount() {
    this.getList()
  }

  getList() {
    const { page, list } = this.state
    fetch.get({
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
            ? <Text className='more'>下拉加载更多</Text>
            : <Text className='more'>没有更多了</Text>)
        }

      </View>
    )
  }
}