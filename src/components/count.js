import React, { Component } from 'react';
import axios from 'axios';
import "./count.css";

const config = {
    headers : {
		'Access-Control-Allow-Origin': '*',
		Authorization: `${process.env.REACT_APP_SL_KEY}`
	}
};

class Count extends Component {

	constructor(){
        super();
        this.state = {
            people: [],
            count: []
        }
    }

	componentDidMount() {
		axios.get('https://api.salesloft.com/v2/people.json', config)
		.then(res => {
            const emails = [];
            const people = res.data.data;
            people.map((person) => {
                if (person.email) {
                    emails.push(person.email);
            }
        });
        emails.forEach((email) => {
            // iterate through the email string and add each character to charMap
            let charMap = {};
            for (let char of email) {
                // add character to charMap, if the character already exists add 1
                if (charMap[char]) {
                    charMap[char]++;
                } else {
                    charMap[char] = 1;
                }
            }
            return charMap;
        });
        this.setState({
            count: this.charMap,
        });
    });
	}
		

	render() {
		return (
            <div className='container'>
				<div className="card-body text-secondary">
					<h5>Count of all the unique characters in all the email addresses of all the People</h5>
                    <p className="card-text">Character: {this.state.charMap}</p>
                    <p className="card-text">Count: </p>
				</div>
			</div>
		)
	}
}

export default Count;
