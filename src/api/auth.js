import Taro from '@tarojs/taro'

class Auth {

  checkoutToke() {
    return Taro.getStorageSync('token')
  }
  // 检查是否登陆
  checkoutLogin() {
    const token = Taro.getStorageSync('token')
    if (!token) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
}

const auth = new Auth()

export default auth
