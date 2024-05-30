import { InputStyleContainer } from './styles'
import { InputHTMLAttributes } from 'react'
type InputProps = InputHTMLAttributes<HTMLInputElement>;
export function Input({ ...props }: InputProps) {
    return (
        <InputStyleContainer{...props} />
    )
}