import styled from "styled-components";

const StyledSection = styled.section`
    height: 100vh;
    width: auto;
    padding: .5rem 1rem;
`;

const Section = (props) => {
    return <StyledSection>{props.children}</StyledSection>
}

export default Section;