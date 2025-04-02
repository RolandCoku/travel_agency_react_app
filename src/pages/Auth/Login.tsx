import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from "../../hooks/useAuth";
import LogoContainer from "../../components/LogoContainer/LogoContainer";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();

     async function handleSubmit(e: { preventDefault: () => void; }): Promise<void> {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div className="login-page">
            <LogoContainer/>
            <main className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="form-title">Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="bx bxs-user" aria-hidden="true"></i>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="bx bxs-lock-alt" aria-hidden="true"></i>
                    </div>
                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" name="remember-me"/> Remember me
                        </label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn-primary">
                        Login
                    </button>
                    <div className="register-link">
                        <p>
                            Don't have an account? <Link to="/register">Register now</Link>
                        </p>
                    </div>
                </form>
            </main>
        </div>
    );
}
