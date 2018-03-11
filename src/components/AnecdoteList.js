import React from 'react'
import { anecdoteVoting } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'
import anecdoteService from './../services/anecdotes'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  
  vote = (id) => (e) => {
    const { anecdoteVoting, setNotification } = this.props
    anecdoteVoting(id)
    const anecdote = this.props.anecdotes.find(a => a.id === id)
    anecdoteService.voteForAnecdote(anecdote)
    setNotification('Your vote has been registered!')
    setTimeout(function() {setNotification('')}, 5000)
    
  }

  render() {
     return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.anecdotes.map(anecdote =>
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

const filteredAnecdotes = (anecdotes, filter) => {
  console.log(anecdotes)
  const filtered_anecdotes = anecdotes.filter(a => a.content.includes(filter))
  return filtered_anecdotes.sort((a,b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return { 
  anecdotes: filteredAnecdotes(state.anecdotes, state.filter)
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
