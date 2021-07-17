import styled from "styled-components";

const Header = styled.header`
	max-width: ${({ theme }) => theme.sections.maxWidth};
	margin: auto;
`;

Header.Navbar = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0.3rem 3rem;
	background-color: ${({ theme }) => theme.colors.navbar};
	color: ${({ theme }) => theme.colors.navbarText};

	div {
		&:first-child {
			flex: 2;
			display: flex;
			align-items: center;

			@media (max-width: 800px) {
				flex: none;
			}

			img {
				margin: auto 0;
				height: auto;
				width: 60px;
			}
		}

		&:not(:first-child) {
			flex: 2;
			display: flex;

			@media (max-width: 1121px) {
				flex-direction: column;
				align-items: center;
			}

			@media (max-width: 800px) {
				display: none;
			}

			a {
				margin: auto 1.5rem;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.colors.navbarSecondaryText};

				&:after {
					border-bottom: 1px solid
						${({ theme }) => theme.colors.navbarSecondaryText};
				}

				@media (max-width: 1121px) {
					margin: 0.3rem 0;
				}
			}
		}
	}

	nav {
		flex: 8;
		text-align: center;

		@media (max-width: 800px) {
			display: ${({ showLinks }) => (showLinks ? "flex" : "none")};
			flex-direction: column;
			margin-top: 6rem;
		}

		a {
			margin: auto 1.5rem;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.colors.navbarMainText};

			@media (max-width: 800px) {
				margin: 1rem auto;
				width: fit-content;
				text-align: center;
			}

			&:after {
				border-bottom: 1px solid
					${({ theme }) => theme.colors.navbarMainText};
			}
		}
	}

	a {
		margin: 0;
		display: inline-block;
	}

	a:after {
		display: block;
		content: "";
		transform: scaleX(0);
		transition: transform 400ms;
	}

	a:hover:after {
		transform: scaleX(1);
	}

	@media (max-width: 800px) {
		align-items: flex-start;
		justify-content: space-between;
		padding: 0.5rem;
	}
`;

Header.Content = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;

	@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* padding-bottom: ${({showLinks}) => showLinks ? "-5vh" : "20vh"}; */
		padding: 0 0 20vh 0;
	}

	div {
		flex: 2;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-left: 10rem;
		text-align: end;

		@media (max-width: 950px) {
			flex: 1;
			text-align: center;
			justify-content: flex-end;
			align-items: center;
			margin: 2rem 1rem;
		}

		h1 {
			font-size: 4.5rem;
			font-family: "Fugaz One", cursive;
			text-transform: uppercase;
			font-weight: bold;
		}

		p {
			font-size: 3rem;
			font-weight: lighter;
		}
	}

	img {
		flex: 1;
		margin: 0 10rem 0 5rem;
		border-radius: 1rem;
		width: 40%;
		min-width: 600px;
		height: auto;

		@media (max-width: 950px) {
			aspect-ratio: 5;
			margin: auto;
		}

		@media (max-width: 650px) {
			min-width: 95%;
		}
	}
`;

Header.Hamburger = styled.span`
	margin: 1rem 0.5rem;
	cursor: pointer;
	user-select: none;
	
	&:focus {
		user-select: none;
		background-color: transparent;
	}

	svg {
		fill: ${({ theme }) => theme.colors.red};
	}

	@media (min-width: 800px) {
		display: none;
	}
`;

export default Header;
