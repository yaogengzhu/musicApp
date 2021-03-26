import Taro from '@tarojs/taro'

class Auth {

  // 检查是否登陆
  checkoutLogin() {
    const token = Taro.getStorageSync('token')
    console.log(token, '--xxx')
    // const token = ''
    if (!token) {
      Taro.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
}

const auth = new Auth()

export default auth
