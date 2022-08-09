import '../App.css';
import React from 'react';
import Heading from '../components/heading';
import Calendar from '../components/calendar';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function MainPage() {

    const navigate = useNavigate();

    return (
        <div className="App">
            <div className="App-header">
                <Heading />
            </div>
            <div className="App-taskbar">
                <Button variant="success" onClick={() => navigate("/Login")}>Save</Button>&nbsp;
                <Button variant="primary">Share</Button>&nbsp;
            </div>
            <Calendar />
        </div>
    );
}

export default MainPage;