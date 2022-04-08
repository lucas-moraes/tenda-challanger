import React, { FunctionComponent } from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;


const InputFieldHidden = styled.input`
    appearance: none;
    background-color: transparent;
    font: inherit;
    color: #00484C;
    width: 24px;
    height: 24px;
    border: 3px solid #00484C;
    border-radius: 6px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
    }

    &:checked::before {
        transform: scale(1);
        background-color: #00484C;
        border-radius: 3px;
    }
`;

const LabelField = styled.label`
    font-family: 'Open Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    margin: 0 7px;
`;

interface CheckboxProps {
    text: string;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ( props ) => {

    return (
        <Container>
            <InputFieldHidden type="checkbox" />
            <LabelField>{ props.text }</LabelField>
        </Container>
    );
};