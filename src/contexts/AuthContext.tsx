import {createContext, ReactNode, useCallback, useState} from "react";
import {login as authServiceLogin, register as authServiceRegister} from "../services/AuthService.tsx";
import {User, RegisterData, LoginData} from "../types/auth";

interface AuthContextType {
    user: User | null;
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => void;
    clearError: () => void;
    error: string | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    register: async () => {},
    logout: () => {},
    clearError: () => {},
    error: null,
    loading: false
});

export const AuthProvider = ({children}: {children : ReactNode} ) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const clearError = useCallback(() => {
        setError(null);
    }, [])

    const login = async (data: LoginData) => {
        setLoading(true);
        try {
            const response = await authServiceLogin(data);
            const responseData = await response.json();
            
            if(response.ok){
                setUser(responseData);
                setError(null);
            } else {
                setError(responseData.message || 'Login failed');
                setLoading(false);
                return;
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unexpected error occurred');
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
    };

    const register = async (data: RegisterData) => {
        setLoading(true);
        try {
            const response = await authServiceRegister(data);
            const responseData = await response.json();
            
            if(response.ok){
                setError(null);
            } else {
                setError(responseData.message || 'Registration failed');
                setLoading(false);
                return;
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unexpected error occurred');
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, error, loading, clearError }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

