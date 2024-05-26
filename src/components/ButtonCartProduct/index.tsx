import { IconBaseProps } from 'react-icons';
import { ButtonCardProductContainer } from './styles'

interface buttonProps {
    title: string;
    loading?: boolean;
    icon?: IconBaseProps;
}
export function ButtonCartProduct({title, loading = false, icon, ...rest }: buttonProps) {
    return (
        <ButtonCardProductContainer
           
            type='button'
            disabled={loading}
            {...rest}
        >
            <>
                {icon}
            </>
            {loading ? 'Carregando...' : title}
        </ButtonCardProductContainer>
    )
}