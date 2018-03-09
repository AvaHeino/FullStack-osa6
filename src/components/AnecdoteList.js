import React from 'react'
import PropTypes from 'prop-types'
import { anecdoteVoting } from './../reducers/anecdoteReducer'
import { setNotification, removeNotification } from './../reducers/notificationReducer'


class AnecdoteList extends React.Component {
  componentDidMount(){
    const { store } = this.context
    this.unsubscibe = store.subscribe(()=> 
      this.forceUpdate()
      )
  }
  vote = (id) => (e) => {
    const { store } = this.context
    store.dispatch(
      anecdoteVoting(id)
      )
    store.dispatch(
      setNotification('Your vote has been registered!')
      )
    setTimeout(function() {store.dispatch(removeNotification())}, 5000)
    
  }

  render() {
    const anecdotes = this.context.store.getState().anecdotes
    console.log(anecdotes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object 
}

export default AnecdoteList
