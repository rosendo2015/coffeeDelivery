import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(8, "Mínimo de oito dígitos").max(8, "Máximo de oito dígitos"),
    street: zod.string().min(3, "Digite a Rua"),
    number: zod.string().min(1, "Digite o número"),
    complement: zod.string(),
    district: zod.string().min(1, "Digite o Bairro"),
    city: zod.string().min(1, "Digite a Cidade"),
    uf: zod.string().min(1, "UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o metodo de pagamento." }
        }
    })
})
export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
type ConfirmOrderFormData = OrderData
export function CompleteOrder() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm

    const navigate = useNavigate()
    const { cleanCart } = useCart()
    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
            state: data,
        })
        cleanCart();
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}