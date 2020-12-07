import React, { useState, useEffect } from 'react';
import MoviePoster from '../../components/movie-posters/posters';
import NoImage from '../images/no_image.png';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        padding: 4,
        borderTopColor: "#000",
        borderTopWidth: StyleSheet.hairlineWidth
    }
});

import { 
    Wrapper, 
    PosterContainer, 
    ContainerScroll,
    CardPosters, 
    Title,
    Img
} from './style';

export default function Trending ( props, { navigation } ) {
    const [similar, getSimilar] = useState('');
    const similarArray = [similar];

    const similarID = props.id;

    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/${similarID}/similar?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=1`)
                .then(res => res.json())
                .then(res => {
                    getSimilar(res)
                });
            }
        )();
    }, [similarID]);

    return (
        <Wrapper>
            <Title style={styles.row}>Similar Options</Title>
            <ContainerScroll>
            {
                similarArray.map((index, key) => (
                        <PosterContainer key={key}>
                            {
                                index.results && (
                                    index.results.map((result) => (
                                        <View key={result.id}>
                                            <CardPosters onPress={() => props.navigation.push('Infos', { id: result.id })}>
                                            {
                                                result.poster_path // There are some movies that don't have posters
                                                                // and this break the style and show nothing on screen, so i decided to use
                                                                // a ternary operator to see if the poster exist, if not, use the "NoImage" image
                                                ?
                                                    <MoviePoster 
                                                        image={result.poster_path}
                                                        altTitle={result.title}
                                                    />
                                                :
                                                    <Img 
                                                        source={NoImage}
                                                    />
                                            }
                                            </CardPosters>
                                        </View>
                                    ))
                                )
                            }
                        </PosterContainer>
                    ))
                }
            </ContainerScroll>
        </Wrapper>
    )
}