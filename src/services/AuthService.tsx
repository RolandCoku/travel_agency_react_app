import {LoginData, RegisterData} from "../types/auth";

export async function login(data: LoginData) {
    const response = await fetch('http://localhost/test_api/auth/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

export async function register(data: RegisterData) {
    const response = await fetch('http://localhost/test_api/auth/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}