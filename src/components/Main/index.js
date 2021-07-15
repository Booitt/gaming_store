import StyledMain from "./styles";
import { offers } from "../../constants";

const Main = () => {
	return (
		<StyledMain>
			<h2>Ofertas imperdíveis</h2>
			<StyledMain.Offers>
				{offers.map((offer) => (
					<div key={offer.img}>
						<img src={`./images/offers/${offer.img}.webp`} alt={offer.alt} />
						<h4>{offer.title}</h4>
						<StyledMain.Offers.OriginalPrice>{offer.originalPrice}</StyledMain.Offers.OriginalPrice>
						<StyledMain.Offers.PromoPrice>{offer.promoPrice} no boleto</StyledMain.Offers.PromoPrice>
						<StyledMain.Offers.Installment>{offer.installment}</StyledMain.Offers.Installment>
					</div>
				))}
			</StyledMain.Offers>
			<StyledMain.Button href="/#">Ver mais ofertas &rarr;</StyledMain.Button>
		</StyledMain>
	);
};

export default Main;
