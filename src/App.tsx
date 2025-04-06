import {Routes, Route, HashRouter} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/User/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
