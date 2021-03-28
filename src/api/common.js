import fetch from '@/api/index'

/**
 * 
 * @returns 获取海报图
 */
export function getBanner() {
  const url = '/banner'
  return fetch.music({
    url,
    params: {
      type: 2
    }
  })
}

/**
 * 
 * @returns 获取首页图标icon
 */
export function getHomePageIcon() {
  const url = '/homepage/dragon/ball'
  return fetch.music({
    url
  })
}


/**
 * 推荐歌单
 */
export function getPersonalized() {
  const url = '/personalized'
  return fetch.music({
    url
  })
}

/**
 *  获取歌单详情
 */
export function getSongDetail(params) {
  const url = '/playlist/detail'
  return fetch.music({
    url,
    params
  })
}
