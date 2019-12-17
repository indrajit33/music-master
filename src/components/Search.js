import React, { Component } from 'react';

class Search extends Component {

	render(){
		return(
		<div className="input-text">
            <input id="singer" placeholder="Enter The Singer Name"/>
            <button onClick = {this.handelclick} >Search</button>
         </div>
		)
	}

	handelclick = () => {
		this.props.func();
	}

}

export default Search;