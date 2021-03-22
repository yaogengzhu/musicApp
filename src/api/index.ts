
import Taro from '@tarojs/taro'

class Fetch {
    post(option) {
        return new Promise((resolve,reject) => {
            Taro.request({
                url: 'http://yaogeng.top' + option.url,
                data: Object.assign(option.params || {},{
                }),
                header: {
                    'content-type': 'application/json' // 默认值
                },
                method: option.mehtods || 'POST'
            }).then(res => {
                return resolve(res)
            }).catch(err => {
                return reject(err)
            })
        })
    }
}

const fetch = new Fetch()
export default fetch