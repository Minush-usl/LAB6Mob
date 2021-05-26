import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function AboutMe() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Єнгаличев Кирило Володимирович {"\n"}
                <Text style={styles.textInnerStyle}>Група ІВ-83</Text>{"\n"}ЗК-8311
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        backgroundColor: "#a6c4c6",
    },

    textStyle: {
        letterSpacing: 0,
        fontWeight: '400',
        fontSize: 19,
        textAlign: 'center', 
        color: "#46413B"
    },
    textInnerStyle: {
        letterSpacing: 3

    }
})
