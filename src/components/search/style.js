import style from 'styled-components/native';

export const Wrapper = style.SafeAreaView `
    background-color: #18191A;
    flex: 1;
`

export const Container = style.View `
    margin-top: 30px;

`

export const ContainerScroll = style.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))``

export const PosterContainer = style.View `
    flex-wrap: wrap;
    flex-direction: row;
`

export const Title = style.Text `
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;

`

export const CardPosters = style.TouchableOpacity `

`

export const Img = style.Image `
    width: 100px;
    height: 150px;
    border-radius: 12px;
    margin-left: 15px;
    margin-top: 20px;
`
