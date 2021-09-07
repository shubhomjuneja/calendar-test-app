import styled from "styled-components";

export const SlotItem = styled.div`
    width: 80px;
    height: 35px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    text-transform: uppercase;
    margin-right: 28px;
    margin-top: 20px;
    cursor:pointer;
    font-weight: 600;
    font-size: 14px;
    @media only screen and (max-width:767px){
        margin: 10px;
    }
    &.active{
        background-color:#b5739f;
        ${'' /* color:#fff; */}
        border-color:#b5739f;
    }
`;
