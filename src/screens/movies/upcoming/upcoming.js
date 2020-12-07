import React, { useState, useEffect }from 'react';
import Poster from '../../../components/movie-posters/posters.js';
import { View } from 'react-native';

import { 
    Wrapper, 
    PosterContainer, 
    ContainerScrollHorizontal, 
    CardPosters, 
    Title
} from './style';

export default function UpComingMovies(props ,{ navigation }) {
    const [upComing, setUpComing] = useState('');

    const upComingArray = [upComing];

    useEffect(() => {
        (
            async () => {
                fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=1`)
                .then(res => res.json())
                .then(res => {
                    setUpComing(res)
                });
            }
        )();
    }, []);
    

    return (
        <Wrapper>
            <Title>Upcoming</Title>
            <ContainerScrollHorizontal>
                {
                    upComingArray.map((index, key) => (
                        <PosterContainer key={key}>
                        {
                            index.results && (
                                index.results.map((result) => (

                                    <View key={result.id}>
                                        <CardPosters onPress={() => props.navigation.navigate('Infos', { id: result.id })}>
                                            <Poster 
                                                image={result.poster_path}
                                                altTitle={result.title}
                                                infos={result.id}
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