import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../Params/AppParamList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../Components/App/Account';
import Music from '../Components/App/Music';
import Upload from '../Components/App/Upload';

interface AppTabsProps {

};

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({ }) => {

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Music') {
                        iconName = 'md-musical-notes'
                    } else if (route.name === 'Upload') {
                        iconName = 'md-cloud-upload';
                    } else if (route.name === 'Account') {
                        iconName = 'md-person';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'rgb(0, 158, 152)',
                inactiveTintColor: 'gray',
                activeBackgroundColor: 'lightgray'
            }}
        >
            <Tabs.Screen name='Music' component={Music}></Tabs.Screen>
            <Tabs.Screen name='Upload' component={Upload}></Tabs.Screen>
            <Tabs.Screen name='Account' component={Account}></Tabs.Screen>
        </Tabs.Navigator>
    );
};