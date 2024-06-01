import { CompletOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompletOrderContainer } from "./styles";

export function CompletOrder() {
    return (
        <div>
            <CompletOrderContainer className="container">
                <CompletOrderForm/>
                <SelectedCoffees/>
            </CompletOrderContainer>
            
        </div>
    )
}