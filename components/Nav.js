import React from 'react';

import AboutMe from "./screens/AboutMe";
import Chart from "./screens/Chart";
import Book from "./screens/Book";
import Image from "./screens/Image";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import NewItem from "./screen-source/NewItem";
import AboutBook from "./screen-source/AboutBook";

const Stack = createStackNavigator();


const darkGray = "#915c5c"
const backColor = "#000000"

const styleConfig = {    
    headerStyle: {
        backgroundColor: darkGray,
        shadowColor: backColor,
    },
    headerTintColor: '#FFF',
}

const bookStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Book">
            <Stack.Screen 
                name="Book"
                component={Book}
                options={{ ...styleConfig, title: 'Books' }}
            />
            <Stack.Screen 
                name="NewItem"
                component={NewItem}
                options={{ ...styleConfig, title: 'Create book' }}
            />
            <Stack.Screen 
                name="AboutBook"
                component={AboutBook}
                options={{ ...styleConfig, title: 'Details' }}
            />
        </Stack.Navigator>
    )
}

const galleryStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Image">
            <Stack.Screen
                name="Image"
                component={Image}
                options={{ ...styleConfig, title: 'Pictures' }}
            />
        </Stack.Navigator>
    )
}

const creatorStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="AboutMe">
            <Stack.Screen
                name="AboutMe"
                component={AboutMe}
                options={{ ...styleConfig, title: 'General' }}
            />
        </Stack.Navigator>
    )
}


const chartStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Chart">
            <Stack.Screen
                name="Chart"
                component={Chart}
                options={{ ...styleConfig, title: 'Graph' }}
            />
        </Stack.Navigator>
    )
}



const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <Tab.Navigator
            tabBarOptions={{ 
                labelStyle: { paddingBottom: 5 }, 
                style: { borderTopColor: backColor},
                activeTintColor: 'white',
                    activeBackgroundColor: darkGray,
                    inactiveBackgroundColor: darkGray }}>

            <Tab.Screen
                name="General"
                component={creatorStackNavigator}
                options={{
                    tabBarLabel: 'General',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Charts"
                component={chartStackNavigator}
                options={{
                    tabBarLabel: 'Graph',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="graph" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Books"
                component={bookStackNavigator}
                options={{
                    tabBarLabel: 'Books',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Pictures"
                component={galleryStackNavigator}
                options={{
                    tabBarLabel: 'Images',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="image" color={color} size={size} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
}
