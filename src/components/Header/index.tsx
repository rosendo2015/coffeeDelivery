import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg'
import { FaCartPlus, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
    const { cartQuantity, setCartQuantity } = useCart()
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <FaMapMarkerAlt size={22} />
                        Fortaleza, CE
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <NavLink to='/completeOrder'>
                            <FaCartPlus size={22} />
                        </NavLink>
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}