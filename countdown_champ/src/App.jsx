import React, {Component} from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: '',
			endTime: '30 minutes',
			newEndTime: ''
		}
	}

	changeDeadline(){
		//this.setState({deadline: 'November 25, 2017'})
		//console.log('state', this.state);
		this.setState({deadline: this.state.newDeadline});
	}

	changeEndTime(){
		this.setState({endTime: this.state.newEndTime});
	}

	render(){
		return(
			<div className="App">
				<div> 
					<div className="App-title">
					Countdown to {this.state.deadline}
					</div>
					<Clock 
						deadline={this.state.deadline}	
					/>
					<div>
						<input placeholder='Enter New Date' 
							onChange={event => this.setState({newDeadline: event.target.value})}
						/>
						<button onClick={() => this.changeDeadline()}>Submit</button>
					</div>
				</div>
				{/*
				<div>
					<div className="Stopwatch-title">
						Stopwatch 
					</div>
					
					<div>
						<input placeholder='Enter time for countdown'/>
						<button>Start!</button>
					</div>
					<div>
						Stopwatch for: {this.state.endTime} 
					</div>
					<Stopwatch 
						endTime={this.state.endTime}
					/>
				</div>

				*/}
			</div>
		)
	}
} 

export default App;