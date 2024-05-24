import { IconBaseProps } from 'react-icons';
import { ButtonContainer } from './styles'

interface buttonProps {
    title: string;
    loading?: boolean;
    icon?: IconBaseProps;
}
export function ButtonCart({ title, loading = false, icon, ...rest }: buttonProps) {
    return (
        <ButtonContainer
           
            type='button'
            disabled={loading}
            {...rest}
        >
            <>
                {icon}
            </>
            {loading ? 'Carregando...' : title}
        </ButtonContainer>
    )
}