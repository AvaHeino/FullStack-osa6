
const getId = () => (100000*Math.random()).toFixed(0)

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const old = state.filter(a => a.id !== id)
      const voted = state.find(a => a.id === id)

      return [...old, { ...voted, votes: voted.votes+1} ]
    case 'CREATE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const anecdoteCreation = (content) => {
  return {
    type: 'CREATE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

export const anecdoteVoting = (id) => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export default anecdoteReducer