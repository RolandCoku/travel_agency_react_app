export async function login({email, password}: {email: string, password: string}) {

    const response = await fetch('http://localhost/test_api/auth/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    return response.json();
}
