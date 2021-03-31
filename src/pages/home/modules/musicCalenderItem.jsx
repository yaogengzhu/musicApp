import { View, Image, Text } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { getCalendar } from '@/api/music'
import dayjs from 'dayjs'
import auth from '@/api/auth'

import './musicCalendarItem.scss'

const MusicCalendarItem = () => {

  const [list, setList] = useState()

  useEffect(() => {
    if (auth.checkoutToke()) {
      getList()
    }

  }, [])


  const getList = async () => {
    try {
      const result = await getCalendar({
        startTime: dayjs().valueOf(),
        endTime: dayjs().add(1, 'day').valueOf()
      })
      setList(result.data.calendarEvents)
    } catch (e) {
      console.log(e)
    }
  }

  if (!list) return null
  return (
    <View className='music-calendar-item'>
      <View className='itme-one'>音乐日历</View>
      {
        list.map((item, index) => (
          <View
            className='item-list'
            key={item.id}
          >
            <View className='info'>
              <View className='tip'>
                <Text>{index === 0 ? '今天' : '明天'}</Text>
                <Text className='symbol'>{item.tag}</Text>
              </View>
              <View className='ellipsis'>{item.title}</View>
            </View>
            <View className='img-icon'>
              <Image
                lazyLoad
                src={item.imgUrl}
              />
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default MusicCalendarItem
