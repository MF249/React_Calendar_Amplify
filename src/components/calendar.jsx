import React, { Component } from 'react';
import Datecard from './datecard';

class Calendar extends Component {

  getMonthName = (num) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[num];
  }

  populateDates = () => {
    let temp = new Date();
    let i, diff = 0;

    let index = this.state.current.getDay();
    this.state.dates[index] = this.state.current.getDate();

    diff = index;
    for (i = 0; i < index; i++) {
      temp.setDate(this.state.current.getDate() - diff);
      this.state.dates[i] = temp.getDate();
      diff--;
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      current : new Date(),
      dates : []
    };  
  }

  render() {
      return (
        
        <div className="App-calendar">
          <p className="Week-of-text">{this.getMonthName(this.state.current.getMonth())} {this.state.current.getFullYear()}</p>
          <div className="Week-div" onLoad={this.populateDates()}>
            <div className="Sunday-div">
              <p>Sunday</p>
            </div>
            <div className="Monday-div">
              <p>Monday</p>
            </div>
            <div className="Tuesday-div">
              <p>Tuesday</p>
            </div>
            <div className="Wednesday-div">
              <p>Wednesday</p>
            </div>
            <div className="Thursday-div">
              <p>Thursday</p>
            </div>
            <div className="Friday-div">
              <p>Friday</p>
            </div>
            <div className="Saturday-div">
              <p>Saturday</p>
            </div>

            <Datecard date={this.state.dates[0]}/>
            <Datecard date={this.state.dates[1]}/>
            <Datecard date={this.state.dates[2]}/>
            <Datecard date={this.state.dates[3]}/>
            <Datecard date={this.state.dates[4]}/>
            <Datecard date={this.state.dates[5]}/>
            <Datecard date={this.state.dates[6]}/>
          </div>
        </div>
      );
  }
}

export default Calendar;