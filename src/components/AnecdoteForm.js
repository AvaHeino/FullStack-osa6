import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  
  handleSubmit = (e) => {
    const { anecdoteCreation, setNotification} = this.props
    e.preventDefault()
    anecdoteCreation(e.target.anecdote.value)
    setNotification('Anecdote succesfully added!')
    setTimeout(function() {
      setNotification('')
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
const mapDispatchToProps = {
  anecdoteCreation,
  setNotification
}
export default connect(
  null,
  mapDispatchToProps
  ) (AnecdoteForm)

