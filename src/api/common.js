import fetch from '@/api/index'

export function getBanner() {
  const url = '/banner'
  return fetch.music({
    url,
    params: {
      type: 2
    }
  })
}
