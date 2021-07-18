import styled from "styled-components";

const Footer = styled.footer`
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media (max-width: 610px) {
		flex-direction: column;
		margin: 1rem 0;
	}

	p {
		@media (max-width: 610px) {
			margin: .5rem 0;
		}
		text-align: center;
		font-size: 1.2rem;
		margin: 3rem 1rem;
	}

	hr {
		@media (max-width: 610px) {
			display: none;
		}
		height: 2.5rem;
		margin: auto 3rem;
		border: 1px solid grey;
	}

	a {
		color: ${({ theme }) => theme.colors.buttonText};
	}
`;

export default Footer;
