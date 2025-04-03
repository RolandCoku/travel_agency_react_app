import {createContext, ReactNode, useState} from "react";
import {login as authServiceLogin} from "../services/AuthService.tsx";

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    error: string | null;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: () => {},
    error: null
});

export const AuthProvider = ({children}: {children : ReactNode} ) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        const response = await authServiceLogin({email, password});
        try {
            if(response.ok){
                const data = await response.json();
                setUser(data);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }   
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unexpected error occurred');
            throw error;
        }
    };

    const logout = () => {
        // Call your API here
        console.log("Logging out");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

