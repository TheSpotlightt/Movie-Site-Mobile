import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Series from './screens/series/series';
import SeriesInfos from './screens/info-page/info-page';

const Stack = createStackNavigator()


export default function Navigation({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Series" 
                    component={Series} 
                    options={{ 
                    title: '', 
                    headerStyle: {
                        backgroundColor: '#242526'
                    }, 
                    headerTintColor: '#FFF',
                    }} 
                />
                <Stack.Screen 
                    name="SeriesInfos" 
                    component={SeriesInfos} 
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