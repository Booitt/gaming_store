import styled from "styled-components";

const Header = styled.header`
`;

Header.Navbar = styled.div`
	position: fixed;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0.3rem 3rem;
	background-color: ${({ theme }) => theme.colors.navbar};
	color: ${({ theme }) => theme.colors.navbarText};

	div {
		&:first-child {
			flex: .1;
			display: flex;
			align-items: center;

			img {
				margin: auto;
				height: auto;
				width: 60px;
			}
		}

		&:last-child {
			text-align: center;

			a {
				margin: auto 1.5rem;
				font-size: 1.4rem;
				color: ${({ theme }) => theme.colors.navbarSecondaryText};

				&:after {
					border-bottom: 1px solid
						${({ theme }) => theme.colors.navbarSecondaryText};
				}
			}
		}
	}

	nav {
		flex: 8;
		text-align: center;

		a {
			margin: auto 1.5rem;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.colors.navbarMainText};

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
`

Header.Content = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;

	div {
		flex: 2;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-left: 10rem;
		text-align: end;

		h1 {
			font-size: 4.5rem;
			font-family: 'Fugaz One', cursive;
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
		box-shadow: 3px 3px 10px #5015B888	;
		width: 40%;
		min-width: 600px;
		height: auto;
	}
`

export default Header;
