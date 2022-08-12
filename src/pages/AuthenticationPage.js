import '../App.css';
import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

function AuthenticationPage() {
    
    const navigate = useNavigate();

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <Container className='Auth-container'>
                    <Card className='Auth-card'>
                        <Card.Body>
                            <Card.Title>Sign In Confirmation</Card.Title>
                            <Card.Text>You have signed in as {user.username}.</Card.Text>
                            <Card.Text>Return to the calendar to begin adding events to your calendar!</Card.Text>
                            <Button variant="success" onClick={signOut}>Sign out</Button>&nbsp;
                            <Button variant="danger" onClick={() => navigate("/")}>Return to Calendar</Button>
                        </Card.Body>
                    </Card>
                </Container>
            )}
        </Authenticator>
    );
}

export default AuthenticationPage;