import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {LoginData} from "../../types/auth";
import LogoContainer from "../../components/LogoContainer/LogoContainer.tsx";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.tsx";
import {FaUser, FaEye, FaEyeSlash} from "react-icons/fa";

export default function Login() {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const {login, error: authError, loading, user, clearError} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        clearError();
    }, [clearError]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        await login(formData);
    }

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="login-page">
            <LogoContainer/>
            <main className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="form-title">Login</h1>
                    {authError && <div className="error-message">{authError}</div>}
                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FaUser className="icon" aria-hidden="true"/>
                    </div>
                    <label htmlFor="password">Password:</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {showPassword ? (
                            <FaEyeSlash
                                className="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{cursor: "pointer"}}
                                aria-label="Hide password"
                                role="button"
                                tabIndex={0}
                            />
                        ) : (
                            <FaEye
                                className="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{cursor: "pointer"}}
                                aria-label="Show password"
                                role="button"
                                tabIndex={0}
                            />
                        )}
                    </div>
                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" name="remember-me"/> Remember me
                        </label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? (
                            <span className="loading-text">Logging in...</span>
                        ) : (
                            <span className="login-text">Login</span>
                        )}
                        {loading && (
                            <LoadingSpinner
                                color="#fff"
                                width="20px"
                                height="20px"
                                borderWidth="3px"
                            />
                        )}
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
