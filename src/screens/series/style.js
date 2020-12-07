import style from 'styled-components/native';

export const Wrapper = style.SafeAreaView `
    background-color: #18191A;
    flex: 1;
`
export const ContainerScroll = style.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))``

export const SeriesButton = style.TouchableOpacity `
    margin-left: 20px;

`

export const Title = style.Text `
    color: #fff
    font-size: 20px;
    font-weight: bold;

    margin-top: 20px;
    margin-left: 25px; 

    text-align: center;
`