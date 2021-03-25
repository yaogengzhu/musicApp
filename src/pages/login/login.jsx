import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import fetch from '@/api/index'

import './login.scss'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    if (phone && password) {
      loign()
    }
  }

  const loign = () => {
    fetch.$fetch({
      url: '/login/cellphone',
      params: {
        phone,
        password
      }
    }).then(() => {
      Taro.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          Taro.navigateBack()
        }
      })

    })
  }

  return (
    <View className='login'>
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

export default Login