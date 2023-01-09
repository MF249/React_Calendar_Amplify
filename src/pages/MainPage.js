import '../App.css';
import React, { useState, useEffect } from 'react';
import Heading from '../components/heading';
import Calendar from '../components/calendar';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';
import { Auth } from 'aws-amplify';

function MainPage() {

    const [user, setUser] = useState("Guest");
    const [importedEvents, setImportedEvents] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo();
    }, []);

    async function getUserInfo() {
        const newUser = await Auth.currentAuthenticatedUser();
        setUser(newUser.username);
        const models = await DataStore.query(Todo);
        console.log(models);
        setImportedEvents(models);
    }

    return (
        <div className="App">
            <Heading user={user} />
            <div className="App-taskbar">
                <Button variant="success" onClick={() => navigate("/Login")}>Save</Button>&nbsp;
                <Button variant="primary">Share</Button>&nbsp;
            </div>
            <Calendar user={user} importedEvents={importedEvents} />
        </div>
    );
}

export default MainPage;