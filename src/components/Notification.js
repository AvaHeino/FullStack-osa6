import React from 'react'
import PropTypes from 'prop-types'
import { setNotification } from './../reducers/notificationReducer'



class Notification extends React.Component {

  componentDidMount() {
    const {store} = this.context
    this.unsubscibe = store.subscribe(()=> 
      this.forceUpdate()
      )
  }

  render() {
    const notification = this.context.store.getState().notification
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
