import StyledHeader from "./styled";
import logo from "../../assets/images/logo.webp";
import setupImg from "../../assets/images/setup.webp";
import { useState } from "react";

const Header = () => {
	const [showLinks, setShowLinks] = useState(false);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	return (
		<StyledHeader>
			<StyledHeader.Navbar showLinks={showLinks}>
				<div>
					<img src={logo} alt="Gaming Store logo" />
				</div>
				<nav>
					<a href="/#">Hardwares</a>
					<a href="/#">Periféricos</a>
					<a href="/#">Monitores</a>
					<a href="/#">Monte seu PC</a>
				</nav>
				<div>
					<a href="/#">Entrar</a>
					<a href="/#">Cadastrar-se</a>
				</div>
				<StyledHeader.Hamburger onClick={toggleLinks}>
					<svg viewBox="0 0 100 80" width="40" height="40">
						<rect width="100" height="20"></rect>
						<rect y="30" width="100" height="20"></rect>
						<rect y="60" width="100" height="20"></rect>
					</svg>
				</StyledHeader.Hamburger>
			</StyledHeader.Navbar>
			<StyledHeader.Content showLinks={showLinks}>
				<div>
					<h1>Jogue o seu melhor</h1>
					<p>Monte seu setup gamer e atinja o topo dos ranks!</p>
				</div>
				<img src={setupImg} alt="Setup gamer"></img>
			</StyledHeader.Content>
		</StyledHeader>
	);
};

export default Header;
