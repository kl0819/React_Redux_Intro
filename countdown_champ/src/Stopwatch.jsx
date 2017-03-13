import React, {Component} from 'react';
import './App.css';
/**
 * TODO
 * Component that works like a stopwatch: 
 * 		The user inputs amount of time for the clock to run and clock counts down
 * 		to 0. An alert will pop up once counter reaches 0. 
 */
class Stopwatch extends Component{
	constructor(props){
		super(props);
		this.state = {
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	// getTimeLeft(endTime){
		// const time = Date.parse(endTime) - 
	//}

	render(){
		return(
			<div>
				<div className="Clock-hours">{this.state.hours} Hours</div>
				<div className="Clock-minutes">{this.state.minutes} Minutes</div>
				<div className="Clock-seconds">{this.state.seconds} Seconds</div>
			</div>
		)
	}
}

export default Stopwatch;