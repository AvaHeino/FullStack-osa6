import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const response = await axios.get(url)
	return response.data
}

const createNew = async (content, votes) => {
	const response = await axios.post(url, {content, votes})
	return response.data
	}

const voteForAnecdote = async (anecdote) => {
	const id = anecdote.Id
	const response = await axios.put('url/:id', anecdote)
	return response.data
}

export default { 
	voteForAnecdote,
	getAll,
	createNew 
}