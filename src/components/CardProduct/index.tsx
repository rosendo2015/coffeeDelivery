import { CardProductContainer } from "./styles";
import coffee001 from '../../assets/coffee001.png'
import { Tag } from "../Tag";
import { ButtonCart } from "../ButtonCart";
import { FaCartShopping } from "react-icons/fa6";

export function CardProduct() {
    return (
        <CardProductContainer>
            <img src={coffee001} alt="coffee001" />
            <Tag title="TRADICIONAL"></Tag>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="wrapperPreco">
                <p>R$ 9,90</p>
                <div>
                    <button>-</button>
                    <span>01</span>
                    <button>+</button>
                </div>
                <ButtonCart title="" icon={<FaCartShopping size={20} />} />
            </div>
        </CardProductContainer>
    )
}