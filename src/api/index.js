
import Taro from '@tarojs/taro'

class Fetch {
  music(option) {
    return new Promise((resolve, reject) => {
      Taro.showLoading({
        title: '加载中'
      })
      Taro.request({
        url: 'https://yaogeng.top' + option.url,
        data: Object.assign(option.params || {}, {
        }),
        header: {
          'content-type': 'application/json', // 默认值
          'cookie': Taro.getStorageSync('cookie') ? Taro.getStorageSync('cookie') : undefined
        },
        method: option.mehtods || 'GET'
      }).then(res => {
        return resolve(res.data)
      }).catch(err => {
        return reject(err)
      }).finally(() => {
        Taro.hideLoading()
      })
    })
  }

  joke(option) {
    return new Promise((resolve, reject) => {
      Taro.showLoading({
        title: '加载中'
      })
      Taro.request({
        url: 'https://www.mxnzp.com' + option.url,
        data: Object.assign(option.params || {}, {
          app_id: 'nvco3nivorqxqwex',
          app_secret: 'aEREREpQVWNTQkgyUjhoa0tBSEhYdz09'
        }),
        header: {
          'content-type': 'application/json', // 默认
        },
        method: option.mehtods || 'GET'
      }).then(res => {
        return resolve(res)
      }).catch(err => {
        return reject(err)
      }).finally(() => {
        Taro.hideLoading()
      })
    })
  }
}

const fetch = new Fetch()

export default fetch