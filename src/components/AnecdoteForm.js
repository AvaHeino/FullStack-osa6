import React from 'react'
import PropTypes from 'prop-types'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
      )
  }
  handleSubmit = (e) => {
    const { store } = this.context
    e.preventDefault()
    store.dispatch(
      anecdoteCreation(e.target.anecdote.value)
      )
    store.dispatch(
      setNotification('Anecdote succesfully added!')
      )
    setTimeout(function() {
      store.dispatch(setNotification(''))
    }, 5000)
  
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
