import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
const borderColor = '#BEC6A6'

const Gallary = ({ images: gallary, width, height}) => {
    const ImageBox = (uri, style = imageBoxStyle()) => (
        <View style={style}>
            <Image
                style={styles.imageStyle}
                source={uri}
            />
        </View>
    );

    const styles = StyleSheet.create({
        row: {
            flex: 1,
            flexDirection: "row",
        },

        column: {
            flexDirection: "column",
        },

        imageStyle: {
            height: "100%",
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        }
    })
    
    const imageBoxStyle = (size = 1) => {
        if (size === 1) {
            return(
                {
                    width: width,
                    height: height,
                    borderWidth: 1,
                    borderColor: borderColor,
                }
            )
        } else if (size === 2) {
            return(
                {
                    width: width * 2,
                    height: height * 2,
                    borderWidth: 1,
                    borderColor: borderColor,
                }
            )
        }
    }


    return (
        <View>
            <View style={styles.row}>
                {gallary[0] && ImageBox(gallary[0])}
                {gallary[1] && ImageBox(gallary[1])}
                {gallary[2] && ImageBox(gallary[2])}
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    {gallary[3] && ImageBox(gallary[3])}
                    {gallary[5] && ImageBox(gallary[5])}
                </View>
                {gallary[4] && ImageBox(gallary[4], imageBoxStyle(2))}
            </View>
            <View style={styles.row}>
                {gallary[6] && ImageBox(gallary[6])}
                {gallary[7] && ImageBox(gallary[7])}
                {gallary[8] && ImageBox(gallary[8])}
            </View>
        </View>
    );
};


export default Gallary
