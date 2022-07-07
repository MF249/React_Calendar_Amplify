import React, { Component } from 'react';
import Datecard from './datecard';

class Calendar extends Component {
  
  getMonthName = (num) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[num];
  }

  getDayName = (num) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday","Saturday"];

    return dayNames[num];
  }

  populateDates = (dates) => {

    let dayNum = new Date(this.state.year, (this.state.month + 1), 0).getDate();
    let firstDay = new Date(this.state.year, this.state.month, 1).getDay();

    for (var i = 0; i < firstDay; i++) {
      dates.push(<div className="Blank-div"></div>);
    }

    for (var i = 1; i < (dayNum + 1); i++) {
      dates.push(<Datecard date={i} />);
    }

  }
  
  constructor(props) {
    super(props);
    this.state = {
      month: (new Date()).getMonth(),
      year: (new Date()).getFullYear()
    };  
  }

  render() {
    
    const dates = [];  
    return (
        
        <div className="App-calendar" onLoad={this.populateDates(dates)}>
          <p className="Week-of-text">{this.getMonthName(this.state.month)} {this.state.year}</p>
          <div className="Week-div">
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

            {dates}

          </div>
        </div>
      );
  }
}

export default Calendar;