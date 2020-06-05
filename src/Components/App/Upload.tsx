import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Center } from '../../Center';
import { Text, Button } from 'react-native';

interface UploadProps {

};

const Upload = () => {

    const { logout } = useContext(AuthContext);

    return (
        <Center>
            <Text>Upload page</Text>
            <Button title='Log out' onPress={() => {
                logout();
            }}></Button>
        </Center>
    );
};

export default Upload;