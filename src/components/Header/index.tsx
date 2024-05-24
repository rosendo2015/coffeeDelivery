import { HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg'

import { LocalTag } from "../LocalTag";
import { FaCartPlus, FaMapMarkerAlt } from "react-icons/fa";
import { ButtonCart } from "../ButtonCart";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <div className="buttonWrapper">
                <LocalTag icon={<FaMapMarkerAlt size={22}/>} title="Fortaleza, CE"></LocalTag>
                <ButtonCart title="" icon={<FaCartPlus size={22}/>}/>
            </div>
        </HeaderContainer>
    )
}