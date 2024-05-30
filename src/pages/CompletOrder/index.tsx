import { CompletOrderForm } from "./components/CompletOrderForm";
import { CompletOrderContainer } from "./styles";

export function CompletOrder() {
    return (
        <div>
            <CompletOrderContainer className="container">
                <CompletOrderForm/>
            </CompletOrderContainer>
            
        </div>
    )
}