import React, { useState, useEffect }from 'react';
import { View, StyleSheet } from 'react-native';
import { Wrapper, Title, Overview, Img, ContainerScroll } from './style';

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})

export default function InfoPage ({ route, navigation }) {
    const [seriesInfo, setSeriesInfo] = useState([]);
    const seriesInfoArray = [seriesInfo];
    const seriesID = route.params.id;

    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/2464380?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US`)
                .then(res => res.json())
                .then(res => {
                    setSeriesInfo(res)
                })
            }
        )()
    }, [seriesID]);

    return (
        <Wrapper>
            <ContainerScroll>
                {
                    seriesInfoArray.map((index, key) => (
                        <>
                            {console.log(index.id)}
                            <View key={key}>
                                <Img 
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w300/${index.profile_path}`
                                    }} alt={index.title} style={styles.absoluteFillObject}
                                />
                                <View style={styles.overlay} />
                                </View>
                                <Title style={{color: '#fff'}}> {index.title} </Title>
                                <Overview style={{color: '#fff'}}>{index.overview}</Overview>
                        </>
                    ))
                }
            </ContainerScroll>
        </Wrapper>
    )
}