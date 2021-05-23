import React,{ useEffect,useState } from 'react'
import { View,Image } from '@tarojs/components'
import { getMusicRemark } from './Service'
import './musicRemark.scss'
import { useReachBottom,getCurrentInstance } from '@tarojs/taro'


interface IUser {
    nickname: string
    avatarUrl: string
    userId: number
}
interface IComent {
    user: IUser,
    content: string
    commentId: number
    time: number
    likedCount: number
}

const MusicRemark = () => {
    const [ musicRemarkList,setMusicRemarkList ] = useState<IComent[]>([])
    const [ size,setSize ] = useState<number>(1)
    const [ hasMore,setHasMore ] = useState<boolean>(false)

    useEffect(() => {
        getMusicRemarkList()
    },[ size ])


    const getMusicRemarkList = () => {
        const { id } = getCurrentInstance().router.params
        getMusicRemark({
            id,
            offset: size,
            // before: musicRemarkList.splice(-1)[0].time
        }).then(res => {
            let list = []
            if (res.hotComments) {
                list = res.hotComments
            } else {
                list = res.comments
            }
            setHasMore(res.more)
            setMusicRemarkList(musicRemarkList.concat(list))
        })
    }

    useReachBottom(() => {
        if (hasMore) {
            setSize(size + 1)
        }
    })

    return (
        <View className='musicRemark'>
            <View className='nav'>
                <View>评论区</View>
                <View className='right'>
                    {/* <Text>推荐</Text>
                    <Text>最热</Text>
                    <Text>最新</Text> */}
                </View>
            </View>
            {
                musicRemarkList.map(item => (
                    <View className='remark-content' key={ item.commentId }>
                        <View className='remark-content-left'>
                            <View className='avatar'>
                                <Image src={ item.user.avatarUrl } lazyLoad />
                            </View>
                        </View>
                        <View className='remark-content-right'>
                            <View className='title-nav'>
                                <View>
                                    <View>{ item.user.nickname }</View>
                                    <View className="time">{ item.time }</View>
                                </View>
                                <View>
                                    { item.likedCount } 👍
                        </View>
                            </View>
                            <View className='text-contet'>
                                { item.content }
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default MusicRemark
