import React, { createContext, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { UserType } from '../Params/AuthParamList';

interface AuthProviderProps {

};

export const AuthContext = createContext<{
    user: UserType,
    login: () => void,
    logout: () => void
}>({
    user: null,
    login: () => { },
    logout: () => { }
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<UserType>(null);

    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                const fakeUser = { username: 'Bernard' }
                setUser(fakeUser);
                AsyncStorage.setItem('user', JSON.stringify(fakeUser));
            },
            logout: () => {
                setUser(null);
                AsyncStorage.removeItem('user');
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
};