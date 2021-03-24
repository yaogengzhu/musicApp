import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
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

    return (
      <View>
        {
          imgList.map((item, index) => (
            <View key={index} style={{ marginBottom: '10px' }}>
              <AtCard
                title={'图片尺寸' + item.imageSize}
                onClick={() => {
                  Taro.previewImage({
                    urls: [item.imageUrl]
                  })
                }}
              >
                <Image src={item.imageUrl} style={{ objectFit: 'cover' }}></Image>
              </AtCard>

            </View>
          ))
        }
        {
          imgList.length > 0 &&
          (hasMore
            ? <Text style={{ margin: '10px 0 ', width: '100%', fontSize: '16px', textAlign: 'center' }}>下拉加载更多</Text>
            : <Text style={{ margin: '10px 0 ', width: '100%', fontSize: '16px', textAlign: 'center' }}>没有更多了</Text>)
        }
      </View>
    )
  }

}

export default Search
