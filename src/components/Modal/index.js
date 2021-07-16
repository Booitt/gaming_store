import { useEffect, useState } from "react";
import { validateEmail } from "../../helper";
import StyledModal from "./styled";
import Input from "../Input";
import Button from "../Button";

const Modal = ({ onClose, setOverflowHidden }) => {
	useEffect(() => {
		setOverflowHidden(true);
	});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [err, setErr] = useState();
	const [success, setSuccess] = useState(false);

	const handleName = (e) => {
		if (err) setErr(null);
		setName(e.target.value.trim());
	};

	const handleEmail = (e) => {
		if (err) setErr(null);
		setEmail(e.target.value.trim());
	};

	const handleSubmit = () => {
		if (!name || !email) return setErr("Os campos não devem estar vazios!");
		if (!validateEmail(email)) return setErr("E-mail inválido!");
		localStorage.setItem(
			"offers",
			JSON.stringify({
				name,
				email,
			})
		);
		setSuccess(true);
	};

	return (
		<StyledModal onClick={onClose}>
			<StyledModal.Wrapper>
				<StyledModal.CloseIcon onClick={onClose}>
					&#10006;
				</StyledModal.CloseIcon>
				<StyledModal.Card onClick={(e) => e.stopPropagation()}>
					{!success ? (
						<>
							<header>
								<h2>
									Cadastre um e-mail para receber as melhores ofertas
								</h2>
							</header>
							<main>
								<p>
									Receba em seu e-mail ofertas de até{" "}
									<strong>80% de desconto!</strong>
									<br />É bobeira perder essa, né?!
								</p>
								<form>
									<Input
										label="Nome"
										name="nome"
										onChange={handleName}
									/>
									<Input
										label="E-mail"
										type="email"
										name="email"
										onChange={handleEmail}
									/>
								</form>
								{err && <p>{err}</p>}
							</main>
							<footer>
								<p>
									Ao clicar em Enviar, você concorda em receber nossos
									e-mails de ofertas.
								</p>
								<Button onClick={handleSubmit}>Enviar</Button>
							</footer>
						</>
					) : (
						<>
							<h2>
								Obrigado, <strong>{name}</strong>!
							</h2>
							<p>
								Em breve você receberá e-mails com as nossas ofertas.
							</p>
						</>
					)}
				</StyledModal.Card>
			</StyledModal.Wrapper>
		</StyledModal>
	);
};

export default Modal;
