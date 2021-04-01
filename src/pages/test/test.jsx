import { View } from '@tarojs/components'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Test = (props) => {

  useEffect(() => {
    // console.log(props, 'x-xx-xx')
  }, [])
  return (
    <View>测试</View>
  )
}

const mapState = (state) => {
  return {
    list: state.test.list
  }
}
export default connect(mapState)(Test)