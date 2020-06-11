import React, { useState } from 'react';
import { AuthNavProps } from '../../Params/AuthParamList';
import { FormContainer } from '../../StyledComponents/FormContainer';
import { View } from "react-native";
import { Formik } from 'formik';
import { Input, Button, Text } from 'react-native-elements';
import * as yup from 'yup';
import { Styles } from '../../StyledComponents/Styles';

interface RegisterProps {

};

const registerSchema = yup.object({
    artistName: yup.string()
        .required('Artist / Band name required'),
    email: yup.string()
        .required('Email address required')
        .email('Invalid email address'),
    password: yup.string()
        .required('Password required')
        .min(6, 'Password must be 6 characters or more')
});

export const Register = ({ navigation }: AuthNavProps<'Register'>) => {

    const [isRegistering, setisRegistering] = useState(false);

    const registerUser = (data: Object, actions: any) => {
        setisRegistering(true);
        console.log(data);
        actions.resetForm();

        setTimeout(() => {
            setisRegistering(false);
        }, 5000);
    };

    return (
        <Formik
            initialValues={{
                artistName: '',
                email: '',
                password: '',
                artistBio: ''
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
                registerUser(values, actions);
            }}>
            {(formikProps) => (
                <>
                    <FormContainer>
                        <View style={Styles.inputContainer}>
                            <Input inputStyle={Styles.inputStyle}
                                placeholder='Artist / Band name'
                                onChangeText={formikProps.handleChange('artistName')}
                                value={formikProps.values.artistName}
                                onBlur={formikProps.handleBlur('artistName')}
                            />
                            <Text style={Styles.errorMessage}>
                                {formikProps.touched.artistName && formikProps.errors.artistName}
                            </Text>
                        </View>

                        <View style={Styles.inputContainer}>
                            <Input inputStyle={Styles.inputStyle}
                                placeholder='Email address'
                                onChangeText={formikProps.handleChange('email')}
                                value={formikProps.values.email}
                                onBlur={formikProps.handleBlur('email')}
                            />
                            <Text style={Styles.errorMessage}>
                                {formikProps.touched.email && formikProps.errors.email}
                            </Text>
                        </View>

                        <View style={Styles.inputContainer}>
                            <Input inputStyle={Styles.inputStyle}
                                placeholder='Password' secureTextEntry={true}
                                onChangeText={formikProps.handleChange('password')}
                                value={formikProps.values.password}
                                onBlur={formikProps.handleBlur('password')}
                            />
                            <Text style={Styles.errorMessage}>
                                {formikProps.touched.password && formikProps.errors.password}
                            </Text>
                        </View>

                        <View style={Styles.inputContainer}>
                            <Input inputStyle={Styles.inputStyle} multiline
                                placeholder='Bio'
                                onChangeText={formikProps.handleChange('artistBio')}
                                value={formikProps.values.artistBio}
                            />
                        </View>

                        <Button
                            loading={isRegistering}
                            raised
                            buttonStyle={Styles.submitButton}
                            title='Register'
                            onPress={formikProps.handleSubmit}
                        />
                    </FormContainer>
                    <View style={Styles.rowAllCentered}>
                        <Text>Already registered?...</Text>
                        <Button titleStyle={Styles.authLinks} onPress={() => {
                            navigation.navigate('Login');
                        }} title='Login' type='clear'></Button>
                    </View>
                </>
            )}
        </Formik>
    );
};