import style from 'styled-components/native';

export const Wrapper = style.SafeAreaView `
    background-color: #18191A;
    flex: 1;
`
export const ContainerScroll = style.ScrollView``

export const PosterContainer = style.View `
    flex-direction: row;
`

export const ContainerScrollHorizontal = style.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
})) ``;

export const CardPosters = style.TouchableOpacity `
    margin-right: 20px;
    align-items: center;
`

export const Title = style.Text `
    color: #fff
    font-size: 20px;
    margin-top: 20px;
    margin-left: 25px; 
    font-weight: bold;
`