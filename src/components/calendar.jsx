import React, { Component } from 'react';
import Datecard from './datecard';
import Select from 'react-select';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal"

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

  getYearIndex = () => {
    let index = (2018 - this.state.year);
    return Math.abs(index);
  }

  populateDates = (dates) => {

    if (this.state.month === "")
      this.setState({ month : (new Date()).getMonth()});

    if (this.state.year === "")
      this.setState({ year : (new Date()).getFullYear()});
    
    let dayNum = new Date(this.state.year, (this.state.month + 1), 0).getDate();
    let firstDay = new Date(this.state.year, this.state.month, 1).getDay();

    for (var i = 0; i < firstDay; i++) {
      dates.push(<div className="Blank-div"></div>);
    }

    for (i = 1; i < (dayNum + 1); i++) {
      dates.push(<Datecard date={i} 
        month={this.getMonthName(this.state.month)} 
        year={this.state.year} 
        events={this.state.events}/>);
    }

  }

  handleNameChange = e => {
    this.setState({ eventName : e.target.value });
  }

  handleDateChange = e => {
    this.setState({ eventDate : e.target.value });
  }
  
  handleAddEvent = e => {
    e.preventDefault();
    
    let insertDate = new Date(this.state.eventDate);
    let month = this.getMonthName(insertDate.getMonth());
    let day = insertDate.getDate() + 1;
    let year = insertDate.getFullYear();
    // let end = Math.floor(Math.random() * 100) + 1;
    // let key = month + "~" + day + "~" + year + "~" + end;

    let insert = { "month" : month, "date" : day, "year" : year, "desc" : this.state.eventName };
    this.setState(prevState => ({ 
      events : [insert, ...prevState.events]
    }));  
    // localStorage.setItem(key, JSON.stringify(insert));

    this.setState({ showAdd : false });
    alert("\r\nEvent added to calendar\r\nDate: " + this.state.eventDate
      + "\r\nDescription: " + this.state.eventName);
  }

  handleDeleteEvent = e => {
    e.preventDefault();

    const newEvents = [...this.state.events];
    newEvents.splice(this.state.deleteIndex, 1);
    this.setState({ events : newEvents });
    this.setState({ showRemove : false });
  }

  populateDeleteMenu = (e, deleteDesc) => {
    e.preventDefault();

    deleteDesc.length = 0;

    let deleteDate = new Date(e.target.value);
    let month = this.getMonthName(deleteDate.getMonth());
    let day = deleteDate.getDate() + 1;
    const eventsArray = [...this.state.events];

    for(var i = 0; i < eventsArray.length; i++) {
      var obj = eventsArray[i];
      if (obj.date === day && obj.month === month) {
          deleteDesc.push({ value : i, label : obj.desc });
          // console.log({ value : i, label : obj.desc });
      }
    }
  }

  showAddModal = () => {
    this.setState({ showAdd : true });
  }
  
  hideAddModal = () => {
    this.setState({ showAdd : false });
  }

  showRemoveModal = () => {
    this.setState({ showRemove : true });
  }
  
  hideRemoveModal = () => {
    this.setState({ showRemove : false });
  }

  handleMonthChange = e => {
    this.setState({ month : e.value });
  }

  handleYearChange = e => {
    this.setState({ year : e.value });
  }

  handleDeleteNameChange = e => {
    this.setState({ deleteIndex : e.value });
    // console.log(this.state.deleteIndex);
  }
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      month: "",
      year: "",
      showAdd: false,
      showRemove: false,
      events: [],
      eventName: "",
      eventDate: "",
      deleteIndex: 0
    };  
  }

  render() {
    
    const monthSelect = [
      {value : "0", label : "January"},
      {value : "1", label : "February"},
      {value : "2", label : "March"},
      {value : "3", label : "April"},
      {value : "4", label : "May"},
      {value : "5", label : "June"},
      {value : "6", label : "July"},
      {value : "7", label : "August"},
      {value : "8", label : "September"},
      {value : "9", label : "October"},
      {value : "10", label : "November"},
      {value : "11", label : "December"}
    ];

    const yearSelect = [
      {value : "2018", label : "2018"},
      {value : "2019", label : "2019"},
      {value : "2020", label : "2020"},
      {value : "2021", label : "2021"},
      {value : "2022", label : "2022"},
      {value : "2023", label : "2023"},
      {value : "2024", label : "2024"},
      {value : "2025", label : "2025"},
      {value : "2026", label : "2026"},
      {value : "2027", label : "2027"}
    ];

    const deleteDesc = [];
    const dates = [];

    return (
        
      <div className="App-calendar" onLoad={this.populateDates(dates)}>
        <div className="Calendar-header">
        <div className="Select-div">
          <Select 
            options={monthSelect} 
            className="month-select" 
            value={monthSelect[this.state.month]}
            onChange={this.handleMonthChange}
          />

          <Select 
            options={yearSelect} 
            className="year-select"
            value={yearSelect[this.getYearIndex()]}
            onChange={this.handleYearChange}
          />

        </div>
          
        <div className="Button-div">  
          <Button variant="success" onClick={this.showAddModal} className="add-button">
            Add Event
          </Button> &nbsp;

          <Button variant="danger" onClick={this.showRemoveModal} className="remove-button">
            Remove Event
          </Button>
        </div>
        </div>
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

        <Modal show={this.state.showAdd} onHide={this.hideAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleAddEvent}>
              <Form.Group className="mb-3" controlId="addEventDescription">
                <Form.Label>Event Description</Form.Label>
                <Form.Control type="text" onChange={this.handleNameChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="addEventDate">
                <Form.Label>Date of Event</Form.Label>
                <Form.Control type="date" onChange={this.handleDateChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="modalButtons">
                <Button variant="secondary" onClick={this.hideAddModal}>Cancel</Button>{' '}
                <Button variant="primary" type="submit">Add To Schedule</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showRemove} onHide={this.hideRemoveModal}>
          <Modal.Header closeButton>
            <Modal.Title>Remove Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleDeleteEvent}>
              <Form.Group className="mb-3" controlId="formEventDate">
                <Form.Label>Date of Event</Form.Label>
                <Form.Control type="date" onChange={e => this.populateDeleteMenu(e, deleteDesc)} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="addEventDescription">
                <Form.Label>Event Description</Form.Label>
                <Select 
                  options={deleteDesc} 
                  className="delete-select"
                  onChange={this.handleDeleteNameChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="modalButtons">
                <Button variant="secondary" onClick={this.hideRemoveModal}>Cancel</Button>{' '}
                <Button variant="primary" type="submit">Delete from Calendar</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Calendar;