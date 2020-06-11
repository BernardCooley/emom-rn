import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Center } from '../../StyledComponents/Center';
import { Text, Button } from 'react-native';

interface AccountProps {

};

const Account = () => {

    const { logout } = useContext(AuthContext);

    return (
        <Center>
            <Text>Account page</Text>
            <Button title='Log out' onPress={() => {
                logout();
            }}></Button>
        </Center>
    )
};

export default Account;