import React, { Component } from 'react';


class Person extends Component {

	render() {
		return (
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">Name</div>
                <div class="card-body text-secondary">
                    <h5 class="card-title">Email</h5>
                    <p class="card-text">Job Title</p>
                </div>
            </div>
			)
	}
}

export default Person;
