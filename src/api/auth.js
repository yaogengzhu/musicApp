import Taro from '@tarojs/taro'

class Auth {

  // 检查是否登陆
  checkoutLogin() {
    const token = Taro.getStorageSync('token')
    if (!token) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })
    }
    return true
  }
}

const auth = new Auth()

export default auth
