import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompleteOrder } from "./pages/CompletOrder";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/completeOrder" element={<CompleteOrder />} />
                <Route path="/orderConfirmed" element={<OrderConfirmed />} />
            </Route>
        </Routes>
    )
}