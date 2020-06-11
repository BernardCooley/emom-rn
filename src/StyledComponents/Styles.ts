import { StyleSheet } from "react-native";
import Colors from './Colors';

export const Styles = StyleSheet.create({
    errorMessage: {
        color: Colors.errorMessage,
        width: '100%',
        marginLeft: 10,
        marginTop: -20
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20
    },
    submitButton: {
        backgroundColor: Colors.primary,
        width: 100
    },
    inputStyle: {
        color: Colors.secondary
    },
    authLinks: {
        color: Colors.links,
        fontWeight: 'bold'
    },
    rowAllCentered: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});