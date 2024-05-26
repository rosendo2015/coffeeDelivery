import { CardProductContainer } from "./styles";
import coffee001 from '../../assets/coffee001.png'
import { Tag } from "../Tag";
import { ButtonCart } from "../ButtonCart";
import { FaCartShopping } from "react-icons/fa6";

export function CardProduct() {
    return (
        <CardProductContainer>
            <img src={coffee001} alt="coffee001" />
            <div className="wrapperTag">
                <Tag title="TRADICIONAL"></Tag>
                <Tag title="TRADICIONAL"></Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="wrapperPrice">
                <p>R$ <strong>9,90</strong> </p>
                <div className="QTDItem">
                    <button>-</button>
                    <strong>01</strong>
                    <button>+</button>
                </div>
                <ButtonCart title="" icon={<FaCartShopping size={20} />} />
            </div>
        </CardProductContainer>
    )
}