import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
                <Text style={styles.welcome}>Welcome back,</Text>
                <Text style={styles.welcome}>Ting!</Text>
            </ImageBackground>
            
    
        </View>
    );
};

export default HomeScreen;

const width = Dimensions.get('window').width
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        color:'white',
        fontSize: 50,
        fontWeight: '600',
        paddingTop: 50,
        paddingLeft: width * 0.05,
    },
});