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
            dupeEmail: []
        }
    }

	componentDidMount() {
		axios.get('https://api.salesloft.com/v2/people.json', config)
		.then(res => {
            // retrieving the email addresses from each person in order to iterate through them
            const emails = [];
            const people = res.data.data;
            people.map((person) => {
                if (person.email) {
                    emails.push(person.email);
            }
        });
        // Try to find possible duplicate email addresses by comparing them
        emails.forEach((email) => { 
            let email1 = '';
            let email2 = '';
            let dupeEmail = '';
            // compare the length of the first email to the second email
            // if they are the same length, it may be a duplicate
            if (email1.length === email2.length) {
                dupeEmail.push(email);
            }
        });
    });
	}
		

	render() {
		return (
            <div className='container'>
            {/* render the list of duplicate people here */}
				<p>List of possible duplicate people: </p>
			</div>
		)
	}
}

export default Duplicate;
