import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from './../services/anecdotes'

class AnecdoteForm extends React.Component {
  
  handleSubmit = async (e) => {
    const { anecdoteCreation, setNotification} = this.props
    e.preventDefault()

    const content = (e.target.anecdote.value)
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content, 0)
    console.log(newAnecdote)

    anecdoteCreation(newAnecdote)

    setNotification('Anecdote succesfully added!')
    setTimeout(function() {
      setNotification('')
    }, 5000)
  
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

