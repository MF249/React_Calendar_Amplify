import '../App.css';
import React, { useState, useEffect } from 'react';
import Heading from '../components/heading';
import Calendar from '../components/calendar';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { listEvents } from '../graphql/queries';
import { Auth, API } from 'aws-amplify';

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
        const apiData = await API.graphql({ query: listEvents });
        console.dir(apiData.data.listEvents.items);
        setImportedEvents(apiData.data.listEvents.items);
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