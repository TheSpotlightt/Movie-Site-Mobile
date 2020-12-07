import React, { useState, useEffect } from 'react';
import Poster from '../../../components/movie-posters/posters.js';
import { View } from 'react-native';

import { 
    Wrapper, 
    PosterContainer, 
    ContainerScrollHorizontal, 
    CardPosters, 
    Title
} from './style';
export default function Trending ( props, { navigation } ) {
    const [trending, setTrending] = useState('');

    const trendingArray = [trending];
    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d8007bb731f4937f50c8e7528e5c21e2`)
                .then(res => res.json())
                .then(res => {
                    setTrending(res)
                });
            }
        )();
    }, []);

    return (
        <Wrapper>
            <Title>Trending</Title>
            <ContainerScrollHorizontal>
            {
                trendingArray.map((index, key) => (
                        <PosterContainer key={key}>

                            {
                                index.results && (

                                    index.results.map((result) => (

                                        <View key={result.id}>
                                            <CardPosters onPress={() => props.navigation.navigate('Infos', { id: result.id })}>
                                                <Poster 
                                                    image={result.poster_path}
                                                />
                                            </CardPosters>
                                        </View>
                                    ))
                                )
                            }
                            
                        </PosterContainer>
                    ))
                }
            </ContainerScrollHorizontal>
        </Wrapper>
    )
}