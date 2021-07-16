import styled from "styled-components";

const Main = styled.main`
	min-height: 85vh;
	padding: 5rem 0;
	background-color: white;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		text-transform: uppercase;
		font-size: 3rem;
	}
`;

Main.Offers = styled.div`
	max-width: ${({ theme }) => theme.sections.maxWidth};
	height: 40rem;
	width: 80%;
	margin: auto;
	background-color: ${({ theme }) => theme.colors.mainBackground};
	display: flex;
	justify-content: space-around;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 320px;
		padding: 1rem;
		border-radius: 1.5rem;
		border: 1px solid white;
		transition: border-color 400ms;

		&:hover {
			cursor: pointer;
			border-color: #3d3a3a;
		}

		img {
			margin: 0 3rem;
		}

		h4 {
			font-size: 1.5rem;
		}
	}
`;

Main.Offers.OriginalPrice = styled.p`
	font-size: 1.2rem;
	color: grey;
	text-decoration: line-through;
`;
Main.Offers.PromoPrice = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	color: #2b9951;
`;
Main.Offers.Installment = styled.p`
	font-size: 1.3rem;
	color: #e3a23d;
`;

Main.Button = styled.a`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.buttonText};
	display: inline-block;
	text-align: center;
	margin-bottom: 5rem;

	&:after {
		border-bottom: 1px solid ${({ theme }) => theme.colors.buttonText};
		display: block;
		content: "";
		transform: scaleX(0);
		transition: transform 400ms;
	}

	&:hover:after {
		transform: scaleX(1);
	}
`;

export default Main;
