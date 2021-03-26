
import { UPDATE_USER } from '@/store/actionType'
import fetch from '@/api/index'
import { store } from '@/store'

// 获取用户信息
export function getUserInfo() {
  const url = '/user/account'
  return fetch.music({
    url,
    params: {
      type: 2
    }
  }).then(res => {
    const { dispatch } = store
    dispatch({
      type: UPDATE_USER,
      ...res
    })
    return res
  })
}
