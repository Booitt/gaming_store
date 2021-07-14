import Section from "../components/Section";
import backgroundImage from "../assets/images/bg1.jpg"

const HomePage = () => {
	return (
		<main>
			<header></header>
			<main>
				<Section backgroundImage={backgroundImage}>
					<h1>Hello World</h1>
				</Section>
			</main>
			<footer></footer>
		</main>
	);
};

export default HomePage;
