import React, { Component } from 'react';
import axios from 'axios';
import "./personList.css";

// added api key to the .env file
// assigned the api key to a variable so the key is not exposed publicly
const config = {
    headers : {
		'Access-Control-Allow-Origin': '*',
		Authorization: `${process.env.REACT_APP_SL_KEY}`
	}
};

class PersonList extends Component {

	constructor(){
        super();
        this.state = {
            people: [],
        }
    }

	// retrieving the people data from the api
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
				<div className="card border-secondary mb-3">
					{/* iterate through each person to get their info and render to the screen */}
					{this.state.people.map(person => (
						<div className="card-header" key={person.id}>
							<p className="card-text">{person.first_name} {person.last_name}</p>
							<div className="card-body text-secondary">
								<p className="card-text">{person.email_address}</p>
								<p className="card-text">{person.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default PersonList;
