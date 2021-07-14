import StyledHeader from "./styles";
import logo from "../../assets/images/logo.webp";
import perifericosImg from "../../assets/images/setup.png";

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeader.Navbar>
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
			</StyledHeader.Navbar>
			<StyledHeader.Content>
				<div>
					<h1>Performe o seu máximo</h1>
					<p>
						Monte seu setup gamer e atinja o topo dos ranks!
					</p>
				</div>
				<img src={perifericosImg} alt="Periféricos de computador"></img>
			</StyledHeader.Content>
		</StyledHeader>
	);
};

export default Header;
