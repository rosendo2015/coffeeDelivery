import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompletOrder } from "./pages/CompletOrder";
import { DefaultLayout } from "./Layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/completOrder" element={<CompletOrder />} />
            </Route>
        </Routes>
    )
}