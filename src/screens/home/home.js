import React from 'react';
import { Wrapper, ContainerScroll, SeriesButton, Title } from './style';
import { TouchableOpacity, Text } from 'react-native';

import Popular from '../movies/popular/popular';
import Trending from '../movies/trending/trending';
import UpComing from '../movies/upcoming/upcoming';
import TopRated from '../movies/top-rated/top-rated';

export default function Home({ navigation }) {
    return (
        <Wrapper>
            <ContainerScroll>
                <Title>Movies</Title>
                <Popular
                    navigation={navigation}
                />
                <TopRated 
                    navigation={navigation}
                />
                <Trending 
                    navigation={navigation}
                />
                <UpComing 
                    navigation={navigation}
                />
            </ContainerScroll>
        </Wrapper>
    )
}