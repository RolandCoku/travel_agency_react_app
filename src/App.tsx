import type {NavigateOptions} from "react-router-dom";
import {Routes, Route, useNavigate, useHref} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Home from "./pages/User/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import {HeroUIProvider} from "@heroui/react";

declare module "@react-types/shared" {
    interface RouterConfig {
        routerOptions: NavigateOptions;
    }
}

function App() {
    const navigate = useNavigate();
    return (
        <AuthProvider>
            <HeroUIProvider navigate={navigate} useHref={useHref}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </HeroUIProvider>
        </AuthProvider>
    );
}

export default App;
