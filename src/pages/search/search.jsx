import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, ScrollView, Button } from '@tarojs/components'
import { AtCard } from "taro-ui"
import fetch from '@/api'

class Search extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      imgList: [],
      page: 1,
      hasMore: false,
    }
  }

  componentDidMount() {
    this.getImgList()
  }

  getImgList() {
    const { page, imgList } = this.state
    fetch.joke({
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

  toShare = async (url) => {
    Taro.downloadFile({
      url,
      success: (res) => {
        console.log(res.tempFilePath)
      }
    })
  }

  async onShareAppMessage() {
    return {
      title: '我是分享标题～好不好看～',
      path: '',
      imageUrl: '', // 生成的分享图赋值给到小程序自定义分享图链接
      success: function () {
        // 转发成功
      },
      fail: function () {
        // 转发失败
        console.log('转发失败')
      }
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
                  note={<Button
                    className='share-btn'
                    open-type='share'
                    style={{ display: 'flex', justifyContent: 'center'}} onClick={(e) => {
                        e.stopPropagation()
                        this.toShare(item.imageUrl)
                  }}
                  >
                    一键分享
                  </Button>}
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
