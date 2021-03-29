import Taro from '@tarojs/taro'

/**
 * 
 * @param {} options 
 */
export function openMessage(messageType = 'none', message = '', options = {}) {
  return Taro.showToast({
    icon: messageType,
    title: message || '',
    ...options
  })
}