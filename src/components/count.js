import React, { Component } from 'react';
// import axios from 'axios';
import "./count.css";

// const config = {
//     headers : {
// 		'Access-Control-Allow-Origin': '*',
// 		Authorization: `${process.env.REACT_APP_SL_KEY}`
// 	}
// };

class Count extends Component {

	// constructor(){
    //     super();
    //     this.state = {
    //         people: [],
    //     }
    // }

	// componentDidMount() {
	// 	axios.get('https://api.salesloft.com/v2/people.json', config)
	// 	.then(res => {
	// 		this.setState({
	// 			people: res.data.data
	// 		});
	// 	})
	// }
		

	render() {
		return (
            <div className='container'>
				<div className="card-body text-secondary">
					<p className="card-text">Character: </p>
                    <p className="card-text">Count: </p>
				</div>
			</div>
		)
	}
}

export default Count;
