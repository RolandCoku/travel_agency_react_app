export interface User {
    id: string;
    email: string;
    name: string;
}

export interface RegisterData {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginData {
    email: string;
    password: string;
} 