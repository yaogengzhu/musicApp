import fetch from '@/api'
import Taro from '@tarojs/taro'
import { store } from '@/store/index'
import { MUSIC_RECORD } from '@/store/actionType'
/**
 * 每日推荐
 * @param {} params 
 * @returns 
 */
export async function getCalendar(params) {
  const url = '/calendar'
  return fetch.music({
    url,
    params
  })
}

/**
 * 获取每日推荐歌单
 * @returns 
 */
export async function getRecommendResource() {
  const url = '/recommend/songs'
  return fetch.music({
    url
  })
}

/**
 * 
 * 获取音乐url
 * @param {*} params 
 * @returns 
 */
export async function getSongUrl(params) {
  const url = '/song/url'
  return fetch.music({
    url,
    params
  })
}

/**
 * 获取用于的播放记录
 * @param {}} params 
 * @returns 
 * 必选参数 : uid : 用户 id 
 * 可选参数 : type : type=1 时只返回 weekData, type=0 时返回 allData
 */
export async function getUserPlayRecord(params = {}) {
  const { dispatch } = store
  const uid = Taro.getStorageSync('uid')
  const url = '/user/record'
  return fetch.music({
    url,
    params: Object.assign({
      uid,
      type: 1
    }, params)
  }).then((res) => {
    dispatch({
      type: MUSIC_RECORD,
      weekData: res.weekData
    })
    return res
  })
}