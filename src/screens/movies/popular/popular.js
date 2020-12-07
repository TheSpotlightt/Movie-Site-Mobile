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

export default function Popular( props, { navigation } ) {
    const [popular, setPopular] = useState([]);

    const popularArray = [popular];

    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=1`)
                .then(response => response.json())
                .then(data => {
                    setPopular(data)
                })
                .then(error => console.log("error", error))
            }
        )();
    }, [])

    return (
        <Wrapper>
            <Title>Popular</Title>
            <ContainerScrollHorizontal>
                {
                    popularArray.map((index, key) => (
                        <PosterContainer key={key}>
                            {
                                index.results && (
                                    index.results.map(result => (
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