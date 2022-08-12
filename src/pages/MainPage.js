import '../App.css';
import React, { useState, useEffect } from 'react';
import Heading from '../components/heading';
import Calendar from '../components/calendar';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Hub, Logger, Auth } from 'aws-amplify';

function MainPage() {

    const [user, setUser] = useState("Guest");
    const navigate = useNavigate();
    const logger = new Logger('My-Logger');

    useEffect(() => {
        async function getUsername() {
            let user = await Auth.currentAuthenticatedUser();
            console.dir(user);
            setUser(user.username);
        }
        getUsername();
     }, [])
    
    const listener = (data) => {
        switch (data.payload.event) {
            case 'signIn':
                logger.info('user signed in');
                break;
            case 'signUp':
                logger.info('user signed up');
                break;
            case 'signOut':
                logger.info('user signed out');
                break;
        }
    }
    Hub.listen('auth', listener);

    return (
        <div className="App">
            <Heading user={user} />
            <div className="App-taskbar">
                <Button variant="success" onClick={() => navigate("/Login")}>Save</Button>&nbsp;
                <Button variant="primary">Share</Button>&nbsp;
            </div>
            <Calendar />
        </div>
    );
}

export default MainPage;