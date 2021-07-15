import StyledFooter from "./styles";

const Footer = () => {
	return (
		<StyledFooter>
			<p>Copyright © 2021</p>
			<hr />
			<p>
				Desenvolvido por{" "}
				<a
					href="https://www.linkedin.com/in/allisson-tagliaferro-5b9395213"
					target="_blank"
					rel="noreferrer"
				>
					Allisson Tagliaferro
				</a>
			</p>
			<hr />
			<p>Desafio Hiring Coders</p>
		</StyledFooter>
	);
};

export default Footer;
