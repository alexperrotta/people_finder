import React, { Component } from 'react';
import axios from 'axios';

const config = {
    headers : {
		'Access-Control-Allow-Origin': '*',
		Authorization: `${process.env.SL_KEY}`
	}
};

class PersonList extends Component {

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
            <div className="card border-secondary mb-3">
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
		)
	}
}

export default PersonList;
