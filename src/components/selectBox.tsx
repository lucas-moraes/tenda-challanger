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

    @media only screen and (max-width: 600px) {
        width: 40px;
        height: 40px;
      }
`;

const SelectField = styled.select`
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

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus{
        outline: none;
    }

    &:after{
        color: #00484C;
        width: 10px;
        height: 10px;
    }

`;

const OpitionItem = styled.option`
`;

interface SelectBoxProps {
    owner: string,
    name: any,
}

const ArrowSelect = styled( icon1.KeyboardArrowDown )`
    color: #00484C;
    position: absolute;
    top: 45px;
    right: 42px;
    width: 30px;
    height: 36px;
    pointer-events: none;

    @media only screen and (max-width: 600px) {
        top: 27px;
        right: 20px;
      }

`;

export const SelectBox: FunctionComponent<SelectBoxProps> = ( props ) => {

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
            <SelectField>
                <OpitionItem>
                    Selecione onde quer morar
                </OpitionItem>
            </SelectField>
            <ArrowSelect />
        </Container>
    );
};