import React, { Component } from "react";

class Datecard extends Component {
    
    componentDidMount() {
        
        const eventsArray = [...this.props.events];
        let dateString = this.props.date;
        let monthString = this.props.month;
        let yearNumber = Number(this.props.year);
        let newEventBox = [];

        for(var i = 0; i < eventsArray.length; i++) {
            var obj = this.props.events[i];
            if (obj.date === dateString && obj.month === monthString && obj.year === yearNumber) {
                newEventBox.push(<p className='Event-text'>{obj.desc}</p>);
            }
        }
            
        this.setState({ eventBox : newEventBox });
    }
    
    componentDidUpdate(prevProps) {
        
        if (this.props.events !== prevProps.events || 
            this.props.month !== prevProps.month || 
            this.props.year !== prevProps.year) {
            
            const eventsArray = [...this.props.events];
            let dateString = this.props.date;
            let monthString = this.props.month;
            let yearNumber = Number(this.props.year);
            let newEventBox = [];

            for(var i = 0; i < eventsArray.length; i++) {
                var obj = this.props.events[i];
                if (obj.date === dateString && obj.month === monthString && obj.year === yearNumber) {
                    newEventBox.push(<p className='Event-text'>{obj.desc}</p>);
                }
            }
            
            this.setState({ eventBox : newEventBox }); 
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          eventBox: []
        };  
    }
    
    render() {

        return (
            <div className="Date-div">
                <p>{this.props.date}</p>
                {this.state.eventBox}
            </div>
        );
    }
}

export default Datecard;