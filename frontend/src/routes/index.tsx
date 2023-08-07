import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Layout/Home";
import { Example } from "../components/Layout/Example";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={Home()} />
                <Route path="/example" element={Example()} />
                <Route path="/menu" element={Example()} />
            </Routes>
        </BrowserRouter>
    );
}