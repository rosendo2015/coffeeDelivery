import { IconContainer, InfoWhitIconContainer } from "./styles";
import { ReactNode } from "react";

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
    return (
        <InfoWhitIconContainer>
            <IconContainer iconBg={iconBg}>{icon}</IconContainer>
            {typeof text === 'string' ? <p>{text}</p> : text} 
        </InfoWhitIconContainer>
    )
}