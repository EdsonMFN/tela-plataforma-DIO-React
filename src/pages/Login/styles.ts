import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 50px auto;
    margin-top: 120px;
    max-width: 1140px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Wrapper = styled.div`
    max-width: 300px
`
export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`
export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`
export const SubTitle = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`
export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;

    color: #E5E044;
`
export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;

    color: rgb(35, 221, 122);
`
export const Line = styled.div`
    padding: 0px;
    margin: 0px 0px 2rem;
    width: 100%;
    display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    

    height: 0.5rem;
    background: linear-gradient(270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21%);
    width: 100%;
    max-width: 6rem;
    border-radius: 1rem;
`