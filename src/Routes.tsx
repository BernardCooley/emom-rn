import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Center } from './Center';
import { AuthContext } from './Providers/AuthProvider';
import { AppTabs } from './Stacks/TabsStack';
import { AuthStack } from './Stacks/AuthStack';

interface RoutesProps {

};

export const Routes: React.FC<RoutesProps> = ({ }) => {
    const { user, login, logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user').then(userString => {
            if (userString) {
                login();
            }
            setLoading(false);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size='large' />
            </Center>
        )
    }


    return (
        <NavigationContainer>
            {user ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
    );
};