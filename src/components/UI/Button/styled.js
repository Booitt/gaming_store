import styled from "styled-components";

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.red};
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 0.3em;
    cursor: pointer;
    transition: opacity 400ms;

    &:hover {
        opacity: .85;
    }
`;

export default Button;