import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList, AuthNavProps } from '../Params/AuthParamList';
import { Center } from '../Center';
import { Text, Button } from 'react-native';
import { Login } from '../Components/Auth/Login';
import { Register } from '../Components/Auth/Register';

interface AuthStackProps {

};

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator >
    );
};