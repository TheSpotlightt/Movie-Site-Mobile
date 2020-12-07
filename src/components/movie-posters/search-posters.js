import React from 'react';
import { Container, Img } from './search-poster-style';

export default function PosterResult (props) {
    const posters = props.image;

    return (
    <Container>
        <Img source={{
            uri: `https://image.tmdb.org/t/p/w200/${posters}`
            }} 
        />
    </Container> 
)
}