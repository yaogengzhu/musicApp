import fetch from '@/api'

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