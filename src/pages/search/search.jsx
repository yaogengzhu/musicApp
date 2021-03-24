import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, ScrollView } from '@tarojs/components'
import { AtCard } from "taro-ui"
import fetch from '@/api'

class Search extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      imgList: [],
      page: 1,
      hasMore: false
    }
  }

  componentDidMount() {
    this.getImgList()
  }

  getImgList() {
    const { page, imgList } = this.state
    fetch.get({
      url: '/api/image/girl/list',
      params: {
        page: page
      }
    }).then(res => {
      const data = res.data.data
      console.log(data)
      if (page === 1) {
        this.setState({
          imgList: data.list,
          hasMore: data.totalPage > page
        })
      } else {
        this.setState({
          imgList: imgList.concat(data.list),
          hasMore: data.totalPage > page
        })
      }

    })
  }

  onPullDownRefresh() {
    this.getImgList()
  }

  onReachBottom() {
    const { page, hasMore } = this.state
    if (hasMore) {
      this.setState({
        page: page + 1
      }, () => {
        this.getImgList()
      })
    }
  }

  render() {
    const { imgList, hasMore } = this.state
    if (!imgList) return null
    const imgs = imgList.map(item => item.imageUrl)

    return (
      <View>
        <ScrollView>
          {
            imgList.map((item, index) => (
              <View key={index} style={{ marginBottom: '10px' }}>
                <AtCard
                  customStyle={{ display: 'felx', justifyContent: 'center' }}
                  title={'图片尺寸 - ' + item.imageSize}
                  onClick={() => {
                    Taro.previewImage({
                      urls: imgs,
                      current: item.imageUrl
                    })
                  }}
                >
                  <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
                    <Image
                      mode='aspectFill'
                      lazyLoad
                      src={item.imageUrl} style={{ objectFit: 'cover' }}
                    />
                  </View>
                </AtCard>
              </View>
            ))
          }
        </ScrollView>
        {
          imgList.length > 0 &&
          (hasMore
            ? <View style={{ margin: '5px 0 ', width: '100%', fontSize: '12px', textAlign: 'center', color: '#666' }}>上拉加载更多</View>
            : <View style={{ margin: '5px 0 ', width: '100%', fontSize: '12px', textAlign: 'center', color: '#666' }}>没有更多了</View>)
        }
      </View>
    )
  }

}

export default Search
