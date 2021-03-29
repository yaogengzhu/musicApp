
import Taro from '@tarojs/taro'
import { openMessage } from '@/utils/system'

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
        Taro.hideLoading()
        if (res.data.code === 200) {
          return resolve(res.data)
        }
        if (res.data.code === 400) {
          return openMessage('none', '参数异常')
        }
        openMessage('none', res.data.message)

      }).catch(err => {
        Taro.hideLoading()
        openMessage('none', err)
        return reject(err)
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
        Taro.hideLoading()
        return resolve(res)
      }).catch(err => {
        Taro.hideLoading()
        return reject(err)
      })
    })
  }
}

const fetch = new Fetch()

export default fetch