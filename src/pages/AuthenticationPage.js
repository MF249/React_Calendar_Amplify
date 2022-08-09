import '../App.css';
import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    View,
    Card,
} from "@aws-amplify/ui-react";

function AuthenticationPage({ user, signOut }) {
    return (
        <View className="App">
            <Card>
                <Heading level={1}>Welcome, {user.username}!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(AuthenticationPage);