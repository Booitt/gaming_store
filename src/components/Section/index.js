import styled from "styled-components";

const StyledSection = styled.section`
	background: url(${(props) => props.backgroundImage}) no-repeat;
    background-size: cover;
	height: 100vh;
	width: auto;
	padding: 0.5rem 1rem;
`;

const Section = (props) => {
	return (
		<StyledSection {...props}>
			{props.children}
		</StyledSection>
	);
};

export default Section;
