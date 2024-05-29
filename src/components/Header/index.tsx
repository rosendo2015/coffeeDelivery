import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg'
import { FaCartPlus, FaMapMarkerAlt } from "react-icons/fa";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={logo} alt="" />
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <FaMapMarkerAlt size={22} />
                        Fortaleza, CE
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <FaCartPlus size={22} />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}