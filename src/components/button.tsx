import React, { FunctionComponent } from "react";
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
`;

const ButtonItem = styled.button`
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: center;
    padding: 0 10px;
    color: #ffffff;
    background-color: #00484C;
    width: 100%;
    height: 48px;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    border-color: #00484C;

    &:focus{
        outline: none;
    }

    @media only screen and (max-width: 600px) {
        height: 40px;
      }
`;


interface ButtonProps {
    text: string,
}

export const Button: FunctionComponent<ButtonProps> = ( props ) => {

    return (
        <Container>
            <ButtonItem>{ props.text }</ButtonItem>
        </Container>
    );
};