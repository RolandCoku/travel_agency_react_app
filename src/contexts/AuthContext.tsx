import {createContext, ReactNode, useState} from "react";
import {login as authServiceLogin} from "../services/AuthService.tsx";

interface AuthContextType {
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: () => {}
});

export const AuthProvider = ({children}: {children : ReactNode} ) => {
    const [user, setUser] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        const response = await authServiceLogin({email, password});
        console.log(response);
        if(response.ok){
            setUser(response.data);
        }else {
            console.error("Login failed:", response.error);
        }
    };

    const logout = () => {
        // Call your API here
        console.log("Logging out");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

