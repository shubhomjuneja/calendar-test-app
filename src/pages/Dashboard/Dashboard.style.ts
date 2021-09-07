import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    max-width:665px;
    margin:0px auto;
    padding:20px 0px;
    @media only screen and (max-width:767px){
        padding:20px 20px;
        width:unset;
        text-align: center;
    }
`;

export const Heading = styled.h1`
    text-align: center;
`

export const FlexContainer = styled.div`
    display:flex;
    @media only screen and (max-width:767px){
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
`;

export const FlexItem = styled.div`
    flex:1;
`;

export const SlotsWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:20px;
    @media only screen and (max-width:767px){
        justify-content: center;
        width: 306px;
    }
`;

export const TimeWrap = styled.div`
    margin:40px 0px;
`;

