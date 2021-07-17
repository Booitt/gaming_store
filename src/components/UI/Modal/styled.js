import styled from "styled-components";

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.red};
	font-size: 1.5rem;

	text-align: center;
`;

Modal.Wrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: absolute;
`;

Modal.Card = styled.div`
	z-index: 3;
	background-color: white;
	border-radius: 1.5rem;
	max-width: 600px;
	padding: 3rem;

	h2 {
		font-size: 2rem;
	}

	p {
		margin: 1rem 0;
	}

	footer {
		display: flex;
		justify-content: space-between;
	}

	footer p {
		padding-left: 5rem;
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.grey};
	}
`;

Modal.CloseIcon = styled.span`
	height: 100%;
	position: relative;
	z-index: 3;
	font-size: 2.5rem;
	font-weight: bold;
	left: 46%;
	bottom: -1.35em;
	color: ${({ theme }) => theme.colors.grey};
	cursor: pointer;
	user-select: none;
`;

export default Modal;
