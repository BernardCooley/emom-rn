import React from 'react';
import { View } from 'react-native';

interface FormContainerProps {

};

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        }}>
            {children}
        </View>
    );
};