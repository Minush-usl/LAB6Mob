import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { LineChart, PieChart } from "react-native-chart-kit";
import SwitchSelector from 'react-native-switch-selector';
import Svg, { Circle } from 'react-native-svg';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const darkGray = "#1C1C1C"


const styleConfig = {
    bg: "#f7f2f2",
    color: '#12291F',
    toggleBg: '#12291F',
}

let screenWidth = window.width;

export default function Chart() {

    const [toggle, setToggle] = useState(true)
    const [dimensions, setDimensions] = useState({ window, screen });

    function ChartShow() {
        if (toggle) {
            return (
                <View>
                    <LineChart
                        data={data}
                        width={dimensions.window.width - 10}
                        chartConfig={chartConfig}
                        height={270}
                        zIndex={1}
                        style={{ top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}
                    />
                </View>
            )
        } else {
            return (
                <View>
                    <PieChart
                        data={
                            [
                                {
                                    name: "Yellow",
                                    size: 15,
                                    color: "yellow",
                                },
                                {
                                    name: "Brown",
                                    size: 25,
                                    color: "#996633",
                                },
                                {
                                    name: "Gray",
                                    size: 45,
                                    color: "#808080",
                                },
                                {
                                    name: "Red",
                                    size: 10,
                                    color: "red",
                                },
                                {
                                    name: "Purple",
                                    size: 5,
                                    color: "purple",
                                },
                            ]
                        }
                        width={screenWidth}
                        height={297}
                        chartConfig={chartPieConfig}
                        accessor={"size"}
                        backgroundColor={"transparent"}
                        hasLegend={false}
                        center={[screenWidth / 4, 0]}
                    />
                    <View style={orientation().pieChartCircle}>
                        <Svg height="280" width="300">
                            <Circle cx="115" cy="148" r="70" fill={styleConfig.bg} />
                        </Svg>
                    </View>
                </View >
            )
        }
    }

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    const orientation = () => {
        const dim = Dimensions.get('screen');
        if (dim.height >= dim.width) {
            return styles
        } else {
            return landscape
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.toggle}>
                <SwitchSelector
                    options={options}
                    initial={0}
                    textColor={"#999"}
                    selectedColor={styleConfig.color}
                    buttonColor={styleConfig.bg}
                    backgroundColor={styleConfig.toggleBg}
                    borderColor={"#000"}
                    borderRadius={10}
                    onPress={value => setToggle(value)}
                    style={{ paddingTop: 10 }}
                    buttonMargin={1}
                />
            </View>

            <View style={styles.container}>
                <ChartShow isSwitched={toggle} />
            </View>
        </View>
    );
}

const chartConfig = {
    backgroundGradientFrom: styleConfig.bg,
    backgroundGradientTo: styleConfig.bg,
    color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,

    propsForDots: {
        r: "1",
        strokeWidth: "2",
    }
};

const chartPieConfig = {
    color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
}

const options = [
    { label: 'Графік', value: true },
    { label: 'Діаграма', value: false },
];


const data = {
    fromZero: true,
    datasets: 
    [
        {
            strokeWidth: 2, color: (opacity = 1) => `rgba(30, 139, 195, ${opacity})`,
            data: [
                Math.pow(-3, 3), Math.pow(-2.9, 3), Math.pow(-2.8, 3), Math.pow(-2.7, 3), Math.pow(-2.6, 3), Math.pow(-2.5, 3), Math.pow(-2.4, 3), Math.pow(-2.3, 3), Math.pow(-2.2, 3), Math.pow(-2.1, 3),
                Math.pow(-2, 3), Math.pow(-1.9, 3), Math.pow(-1.8, 3), Math.pow(-1.7, 3), Math.pow(-1.6, 3), Math.pow(-1.5, 3), Math.pow(-1.4, 3), Math.pow(-1.3, 3), Math.pow(-1.2, 3), Math.pow(-1.1, 3),
                Math.pow(-1, 3), Math.pow(-0.9, 3), Math.pow(-0.8, 3), Math.pow(-0.7, 3), Math.pow(-0.6, 3), Math.pow(-0.5, 3), Math.pow(-0.4, 3), Math.pow(-0.3, 3), Math.pow(-0.2, 3), Math.pow(-0.1, 3),
                Math.pow(0, 3), Math.pow(0.1, 3), Math.pow(0.2, 3), Math.pow(0.3, 3), Math.pow(0.4, 3), Math.pow(0.5, 3), Math.pow(0.6, 3), Math.pow(0.7, 3), Math.pow(0.8, 3), Math.pow(0.9, 3),
                Math.pow(1, 3), Math.pow(1.1, 3), Math.pow(1.2, 3), Math.pow(1.3, 3), Math.pow(1.4, 3), Math.pow(1.5, 3), Math.pow(1.6, 3), Math.pow(1.7, 3), Math.pow(1.8, 3), Math.pow(1.9, 3),
                Math.pow(2, 3), Math.pow(2.1, 3), Math.pow(2.2, 3), Math.pow(2.3, 3), Math.pow(2.4, 3), Math.pow(2.5, 3), Math.pow(2.6, 3), Math.pow(2.7, 3), Math.pow(2.8, 3), Math.pow(2.9, 3), Math.pow(3, 3),
            ]
        }
    ]
};


const styles = StyleSheet.create({

    screen: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: styleConfig.bg
    },

    container: {
        flex: 10,
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: styleConfig.bg,
        paddingTop: 0
    },

    toggle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },

    pieChartCircle: {
        zIndex: 1, position: 'absolute', paddingLeft: window.height / 8, marginBottom: window.width / 8
    },

});


const landscape = StyleSheet.create({
    pieChartCircle: {
        zIndex: 1, position: 'absolute', paddingLeft: window.height / 8, marginBottom: window.width / 8
    },
});