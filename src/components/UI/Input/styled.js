import styled from "styled-components";

export const Container = styled.div`
    margin: 1.5rem 0;
`

export const Label = styled.label`
    /* font-weight: bold; */
    font-size: 1.3rem;
    display: block;
    text-align: start;
    width: 100%;
    margin: 0 0 .3rem .3rem
`;

export const Input = styled.input`
    border: 1px solid ${({theme}) => theme.colors.red};
    outline: none;
    display: block;
    width: 100%;
    /* font-size: 1.8rem; */
    border-radius: 0.5rem;
    padding: .6rem .8rem;

    &:-webkit-autofill {
        background-color: transparent;
    }
`;