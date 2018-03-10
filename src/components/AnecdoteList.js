import React from 'react'
import { anecdoteVoting } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  
  vote = (id) => (e) => {
    const { anecdoteVoting, setNotification } = this.props
    anecdoteVoting(id)
    setNotification('Your vote has been registered!')
    setTimeout(function() {setNotification('')}, 5000)
    
  }

  render() {
    const filter = this.props.filter 
    const anecdotes = this.props.anecdotes
    const filtered_anecdotes = anecdotes.filter(a => a.content.includes(filter))
   
    return (
      <div>
        <h2>Anecdotes</h2>
        {filtered_anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = (state) => {
  return { 
  filter: state.filter,
  anecdotes: state.anecdotes
  } 
}

const mapDispatchToProps ={
  anecdoteVoting,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
