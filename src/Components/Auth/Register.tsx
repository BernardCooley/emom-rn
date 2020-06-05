import React from 'react';
import { AuthNavProps } from '../../Params/AuthParamList';
import { Center } from '../../Center';
import { Text, Button } from 'react-native';

interface RegisterProps {

};

export const Register = ({ navigation }: AuthNavProps<'Register'>) => {
    return (
        <Center>
            <Text>Register screen</Text>
            <Button title='Go to login' onPress={() => {
                navigation.navigate('Login');
            }}></Button>
        </Center>
    );
};