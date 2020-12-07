import React, { useState, useEffect }from 'react';
import { View, StyleSheet    } from 'react-native';
import { Wrapper, Title, Overview, Img, ContainerScroll } from './style';

import SimilarMovies from '../../components/similar-movies/similar';

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})

export default function InfoPage ({ route, navigation }) {
    const [moviesInfo, setMoviesInfo] = useState([]);
    const moviesInfoArray = [moviesInfo];
    const movieID = route.params.id;

    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US`)
                .then(res => res.json())
                .then(res => {
                    setMoviesInfo(res)
                })
                .catch(error => console.log(error))
            }
        )()
    }, [movieID]);

    return (
        <Wrapper>
            <ContainerScroll>
                {
                    moviesInfoArray.map((index, key) => (
                        <>
                            <View key={key}>
                                <Img 
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w300/${index.poster_path}`
                                    }} alt={index.title} style={styles.absoluteFillObject}
                                />
                                <View style={styles.overlay} />
                                </View>
                                <Title style={{color: '#fff'}}> {index.title} </Title>
                                <Overview style={{color: '#fff'}}>{index.overview}</Overview>

                                <SimilarMovies 
                                    id={movieID}
                                    navigation={navigation}
                                />
                        </>
                    ))
                }
            </ContainerScroll>
        </Wrapper>
    )
}