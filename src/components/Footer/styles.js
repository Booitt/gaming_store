import styled from "styled-components";

const Footer = styled.footer`
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: center;

	p {
		text-align: center;
		font-size: 1.2rem;
		margin: 3rem 1rem;
	}

	hr {
		height: 2.5rem;
		margin: auto 3rem;
		border: 1px solid grey;
	}

	a {
		color: ${({theme}) => theme.colors.buttonText};
	}
`;

export default Footer;
