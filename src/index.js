import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './Navigation'
import Navigation2 from './seriesNavigation';

export default function App() {
    return (
        <>
            <StatusBar 
                barStyle="default"
                backgroundColor="transparent"
                translucent
            />
            <Navigation />
        </>
    )
}