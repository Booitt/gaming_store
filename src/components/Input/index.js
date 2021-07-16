import { Container, Label, Input as StyledInput } from "./styled";

const Input = ({ label, name, type, onChange, inputProps }) => {
	return (
		<Container>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput type={type} id={name} onChange={onChange} {...inputProps} />
		</Container>
	);
};

export default Input;
