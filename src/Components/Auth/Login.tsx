import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Center } from '../../StyledComponents/Center';
import { Text, Button } from 'react-native';
import { AuthNavProps } from '../../Params/AuthParamList';

interface LoginProps {

};

export const Login = ({ navigation }: AuthNavProps<'Login'>) => {
    const { login } = useContext(AuthContext);

    return (
        <Center>
            <Text>Login screen</Text>
            <Button title='Login' onPress={() => {
                login();
            }}></Button>
            <Button title='Go to register' onPress={() => {
                navigation.navigate('Register');
            }}></Button>
        </Center>
    );
};