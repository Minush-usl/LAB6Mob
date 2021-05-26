import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Dimensions, Platform, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Gallary from "../screen-source/Gallary";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const backColor = "#BEC6A6"

export default function Image({ navigation }) {

    const styles = StyleSheet.create({
        container: {
            marginTop: StatusBar.currentHeight,
            backgroundColor: backColor,
            flex: 1,
            borderWidth: 1,
            borderColor: backColor,

        },
        textContainer: {
            flex: 1,
            marginTop: '10%'
        },
        text: {
            textAlign: 'center',
            backgroundColor: backColor,
            fontSize: 18,
            color: 'black'

        },
        addIcon: {
            textAlign: 'right',
            marginHorizontal: 16,
            marginBottom: 5,
            marginTop: 2,
            color: 'white'
        },
    });

    const pickImage = async () => {
        let pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            quality: 1,
        });

        if (!pickedImage.cancelled) {
            setImages(prevState => [...prevState, { uri: pickedImage.uri }])
        }
    };

    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");

    const [dimensions, setDimensions] = useState({ window, screen });
    const [images, setImages] = useState([]);


    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const lstSize = (arr = [], maxArrSize = 9) => {
        const result = [];
        for (let i = 0; i < Math.ceil(arr.length / maxArrSize); i++) {
            result[i] = arr.slice(i * maxArrSize, (i * maxArrSize) + maxArrSize);
        }
        return result;
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('We need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const imageSize = {
        width: dimensions.window.width / 3,
        height: dimensions.window.width / 3,
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={pickImage}>
                    <MaterialCommunityIcons style={styles.addIcon} name="plus" color={'#808082'} size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const GallaryComponent = lstSize(images).map(
        image => (
            <Gallary
                key={image[0].uri}
                images={image}
                width={imageSize.width}
                height={imageSize.height}
            />
        )
    );

    useEffect(() => {
        const url = `https://pixabay.com/api/?key=19193969-87191e5db266905fe8936d565&q=red+cars&image_type=photo&per_page=21`;
        (async () => {
            const fetchResult = await fetch(url);
            const loadedData = await fetchResult.json();
            const loadedDataURI = loadedData['hits'].map((loadData) => ({ uri: loadData['largeImageURL'] }));
            setImages(loadedDataURI);
        })();
    }, []);

    
    return (
        <SafeAreaView style={styles.container}>
            {
                images.length === 0 ?
                <View style={styles.textContainer}><Text style={styles.text}>No items found</Text></View> : 
                <ScrollView>{GallaryComponent}</ScrollView>
            }
        </SafeAreaView>
    );
}

