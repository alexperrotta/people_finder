import React, { Component } from 'react';
import "./person.css";

class Person extends Component {

	render() {
		return (
            <div className="card border-secondary mb-3">
                <div className="card-header">Name</div>
                <div className="card-body text-secondary">
                    <p className="card-text">Email</p>
                    <p className="card-text">Job Title</p>
                </div>
            </div>
			)
	}
}

export default Person;
