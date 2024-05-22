import { IconBaseProps } from "react-icons";
import { LocalTagContainer } from "./styles";

interface LocalTagProps {
    title: string;
    icon: IconBaseProps;
}

export function LocalTag(props: LocalTagProps) {
    return (
        <LocalTagContainer>
            <>
                {props.icon}
            </>
            <span>{props.title}</span>
        </LocalTagContainer>
    )
}