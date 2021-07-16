import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

const HomePage = ({ setOverflowHidden }) => {
	const [showModal, setShowModal] = useState(false);
	// eslint-disable-next-line
	const [_, setIsEmailRegistered] = useState(false);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("offers")) ?? false;
		if (data) {
			setIsEmailRegistered(true);
		} else {
			setShowModal(true)
		}
	}, []);

	const closeModal = () => {
		setOverflowHidden(false);
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<Modal onClose={closeModal} setOverflowHidden={setOverflowHidden} />
			)}
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default HomePage;
