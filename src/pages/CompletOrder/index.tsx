import { CompletOrderForm } from "./components/CompletOrderForm";
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