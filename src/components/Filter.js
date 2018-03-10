import React from 'react'
import PropTypes from 'prop-types'
import { changeFilter } from './../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {

	
	handlechange = (event) => {
		this.props.changeFilter(event.target.value)
	}

	render () {
		const style = { 
			marginBottom: 10
		}

		return (
			<div style={style}>
			 	filter 
			 	<input 
			 		onChange={this.handlechange} 
			 	 	value={this.props.filter}
			 	/>
			 </div>
			)
	}
}


const mapStateToProps =  (state) => {
	return {
		filter: (state.filter)
	}
}

export default connect(
	mapStateToProps,
	{changeFilter}
	)(Filter)