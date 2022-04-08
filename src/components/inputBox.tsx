import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import * as icon1 from 'styled-icons/material-outlined';
import * as icon2 from 'styled-icons/remix-line';


const Container = styled.div`
    display: flex;
`;

const FrameIcon = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 1px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-color: #00484C;
    border-right: none;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    padding: 6px;
`;

const InputField = styled.input`
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    padding: 0 10px;
    color: #00484C;
    background-color: transparent;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-color: #00484C;

    &:focus{
        outline: none;
    }

    &::placeholder{
        color: #00484C;
    }

`;


interface InputBoxProps {
    owner: string,
    type: string,
    name: any,
    placeHolder: string;
}

export const InputBox: FunctionComponent<InputBoxProps> = ( props ) => {

    let icon;
    switch ( props.owner ) {
        case "material":
            //@ts-ignore
            icon = icon1[ props.name ];
            break;
        case "remix-line":
            //@ts-ignore
            icon = icon2[ props.name ];
        default:
            break;
    }

    const Icon = styled( icon )`
        color: #00484C;
        align-self: center;
        width: 25px;
        height: 25px;
    `;

    return (
        <Container>
            <FrameIcon>
                <Icon />
            </FrameIcon>
            <InputField type={ props.type } placeholder={ props.placeHolder } />
        </Container>
    );
};