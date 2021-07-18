import StyledFooter from "./styled";

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
			<p>
				Desafio <a href="https://hiringcoders.com.br" target="_blank" rel="noreferrer">Hiring Coders</a>
			</p>
		</StyledFooter>
	);
};

export default Footer;
