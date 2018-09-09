import React, { Component } from 'react';
import axios from 'axios';

const config = {
    headers : {
		'Access-Control-Allow-Origin': '*',
		Authorization: `${process.env.REACT_APP_SL_KEY}`
	}
};

class Duplicate extends Component {

	constructor(){
        super();
        this.state = {
            people: [],
        }
    }

	componentDidMount() {
		axios.get('https://api.salesloft.com/v2/people.json', config)
		.then(res => {
			this.setState({
				people: res.data.data
			});
		})
	}
		

	render() {
		return (
            <div className='container'>
				<p>List of email address that may be duplicates: </p>
			</div>
		)
	}
}

export default Duplicate;
