
import Taro from '@tarojs/taro'
class Fetch {
  get(option) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://www.mxnzp.com' + option.url,
        data: Object.assign(option.params || {}, {
          app_id: 'nvco3nivorqxqwex',
          app_secret: 'aEREREpQVWNTQkgyUjhoa0tBSEhYdz09'
        }),
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: option.mehtods || 'GET'
      }).then(res => {
        return resolve(res)
      }).catch(err => {
        return reject(err)
      })
    })
  }

  $fetch(option) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://yaogeng.top' + option.url,
        data: Object.assign(option.params || {}, {
        }),
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: option.mehtods || 'GET'
      }).then(res => {
        return resolve(res.data)
      }).catch(err => {
        return reject(err)
      })
    })
  }
}

const fetch = new Fetch()
export default fetch