import React from 'react'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './paly.scss'

const Paly = () => {
    return (
        <View className='paly'>
            <View className='content'></View>
            <View className='footer'>
                <View className='itme'>
                    <AtIcon value='repeat-play' size='30' color='#333'></AtIcon>
                </View>
                <View className='itme'>
                    <AtIcon value='prev' size='30' color='#333'></AtIcon>
                </View>
                <View className='itme'>
                    <AtIcon value='play' size='40' color='#333'></AtIcon>
                </View>
                <View className='itme'>
                    <AtIcon value='next' size='30' color='#333'></AtIcon>
                </View>
                <View className='itme'>
                    <AtIcon value='playlist' size='30' color='#333'></AtIcon>
                </View>
            </View>
        </View>
    )
}
export default Paly
