import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

import HomeScreen from './screens/home/home';
import Infos from './screens/info-page/info-page';
import Search from './components/search/search';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },

    Search: {
        lib: Feather,
        name: 'search'
    }
}

function Tabs () {
    return (
        <Tab.Navigator  
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                }
            })}

            tabBarOptions={{
                style: {
                    backgroundColor: '#242526', 
                    borderTopColor: '#242526'
                }, 
                activeTintColor: '#fefefe',
            }}
            >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}


export default function Navigation({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Tabs} 
                options={{ 
                    title: '', 
                    headerStyle: {
                        backgroundColor: '#242526'
                    }, 
                    headerTintColor: '#FFF',
                    headerShown: false,
                }}
                />
                <Stack.Screen 
                    name="Infos" 
                    component={Infos} 
                    options={{ 
                    title: '', 
                    headerStyle: {
                        backgroundColor: '#242526'
                    }, 
                    headerTintColor: '#FFF',
                }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}