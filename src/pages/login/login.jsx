import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtInput, AtMessage } from 'taro-ui'
import { connect } from 'react-redux'
import { UPDATE_USER } from '@/store/actionType'
import { openMessage } from '@/utils/system'
import fetch from '@/api/index'


import './login.scss'

const Login = (props) => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  // 修复
  const onSubmit = async () => {
    const { dispatch } = props
    console.log(dispatch, 'dispach')
    if (phone && password) {
      fetch.music({
        url: '/login/cellphone',
        params: {
          phone,
          password
        }
      }).then(res => {
        // 将基本的数据直接存入本地
        Taro.setStorageSync('token', res.token)
        Taro.setStorageSync('cookie', res.cookie)
        Taro.setStorageSync('uid', res.account.id)
        console.log(res, 'res')
        dispatch({
          type: UPDATE_USER,
          account: res.account,
          profile: res.profile
        })
        openMessage('success', '登陆成功', {
          success: () => {
            Taro.navigateBack()
          }
        })
      })
    }
  }

  return (
    <View className='login'>
      <AtMessage />
      <AtInput
        name='phone'
        className='input'
        title='手机号'
        type='phone'
        placeholder='请输入密码'
        value={phone}
        onChange={(v) => {
          setPhone(v)
          return v
        }}
      />
      <AtInput
        name='passwort'
        className='input'
        title='密码'
        type='password'
        placeholder='请输入密码'
        value={password}
        onChange={(v) => {
          setPassword(v)
          return v
        }}
      />

      <View className='button'>
        <AtButton type='primary' size='normal' circle onClick={onSubmit}>登陆</AtButton>
      </View>
    </View>
  )
}

export default connect((state) => ({
  ...state.auth
}))(Login)