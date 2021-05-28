import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/index'

import './app.scss'

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {
    return (
      <Provider store={store}>
        { this.props.children}
      </Provider>
    )
  }
}

export default App
