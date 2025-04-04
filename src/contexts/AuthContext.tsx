import {createContext, ReactNode, useState} from "react";
import {login as authServiceLogin, register as authServiceRegister} from "../services/AuthService.tsx";
import {User, RegisterData, LoginData} from "../types/auth";

interface AuthContextType {
    user: User | null;
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => void;
    error: string | null;
    loading: boolean;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    register: async () => {},
    logout: () => {},
    error: null,
    loading: false,
    clearError: () => {},
});

export const AuthProvider = ({children}: {children : ReactNode} ) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const clearError = () => {
        setError(null);
    };

    const login = async (data: LoginData) => {
        setLoading(true);
        const response = await authServiceLogin(data);
        try {
            const data = await response.json();
            if(response.ok){
                setUser(data);
                setError(null);
                setLoading(false);
            } else {
                setLoading(false);
                setUser(null);
                setError(data.message || 'Login failed');
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            setLoading(false);
            setUser(null);
            setError(error instanceof Error ? error.message : 'An unexpected error occurred');
            throw error;
        }
    };

    const register = async (data: RegisterData) => {
        setLoading(true);
        const response = await authServiceRegister(data);
        try {
            const responseData = await response.json();
            if(response.ok){
                setError(null);
                setLoading(false);
            } else {
                setLoading(false);
                setError(responseData.message || 'Registration failed');
                throw new Error(responseData.message || 'Registration failed');
            }
        } catch (error) {
            setLoading(false);
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
        <AuthContext.Provider value={{ user, login, register, logout, error, loading, clearError }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

