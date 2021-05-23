import fetch from '@/api';

/**
 * 
 * @returns 获取歌曲评论
 */
 export function getMusicRemark(params) {
    const url = '/comment/music'
    return fetch.music({
      url,
      params
    })
  }
  