import style from 'styled-components/native';

export const Wrapper = style.SafeAreaView `
    background-color: #18191A;
    flex: 1;
`;
export const ContainerScroll = style.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))``

export const Title = style.Text `
    color: #fff
    font-size: 20px;
    margin-top: 20px;
    margin-left: 15px; 
    font-weight: bold;
`;

export const Overview = style.Text `
    color: #fff
    font-size: 14px;
    margin-top: 20px;
    margin-left: 10px;
`;

export const Img = style.Image `
    width: 100px;
    height: 150px;
    border-radius: 12px;
    margin: 10px auto 10px auto;
`;