import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import MoviePoster from '../../components/movie-posters/search-posters';
import { SearchBar, ThemeProvider  } from 'react-native-elements';

import { Container, ContainerScroll, Title, CardPosters , PosterContainer, Img, Wrapper } from './style';
import NoImage from '../images/no_image.png';


function Result(props) {
    return (
        <View>
            <Title>{props.value}</Title>
        </View>
    )
}

export default function Search({ navigation }) {
    const [movies, setMovies] = useState([]);
    const moviesArray = [movies];

    const [search, setSearch] = useState([]);

    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&query=${search}&page=1&include_adult=false`)
                .then(res => res.json())
                .then(res => {
                    setMovies(res);
                })
            }
        )()
    }, [search]);

    return (
        <Wrapper>
            <Container>
                <SearchBar 
                    onChangeText={search => setSearch(search)} 
                    value={search.toString()} 
                    placeholder="Search by Movie Title" 
                    autoFocus
                    round
                    containerStyle={{backgroundColor: '#18191A', borderBottomColor: '#18191A', borderTopColor: '#18191A'}}
                    inputContainerStyle={{backgroundColor: '#242526'}}
                />
                <ContainerScroll>
                    {
                        moviesArray.map((index, key) => ( 
                            <PosterContainer key={key}>
                                {
                                    index.results && (
                                        index.results.map((result, key) => (
                                            <View key={key}>
                                                <CardPosters onPress={() => navigation.navigate('Infos', { id: result.id })}>
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
            </Container>
        </Wrapper>
    )
}