import React from 'react';
import { View, Text } from 'react-native';
import Popular from './popular/popularSeries';
import { Wrapper, ContainerScroll, SeriesButton, Title } from './style';

export default function Series ({ navigation }) {
    return (
        <Wrapper>
            <ContainerScroll>
                <Title>Series</Title>
                <Popular
                    navigation={navigation}
                />
            </ContainerScroll>
        </Wrapper>
    )
}