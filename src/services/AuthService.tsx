import {LoginData, RegisterData} from "../types/auth";

export async function login(data: LoginData) {
    return await fetch('http://localhost/test_api/auth/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export async function register(data: RegisterData) {
    return await fetch('http://localhost/test_api/auth/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}