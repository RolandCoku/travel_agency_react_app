import {ChangeEvent, useState, FormEvent, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoContainer from "../../components/LogoContainer/LogoContainer.tsx";
import { useAuth } from "../../hooks/useAuth";
import { RegisterData } from "../../types/auth";
import {FaUser, FaEnvelope, FaEyeSlash, FaEye} from "react-icons/fa";

export default function Register() {
    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { register, error: authError, loading, user, clearError } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        clearError();
    }, [clearError]);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        try {
            await register(formData);
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="register-page">
            <LogoContainer />
            <main className="register-container">
                <form onSubmit={handleSubmit} className="register-form">
                    <h1 className="form-title">Register</h1>
                    {authError && <div className="error-message">{authError}</div>}
                    <label htmlFor="name">Name:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="john"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <FaUser className="icon" aria-hidden="true" />
                    </div>
                    <label htmlFor="surname">Surname:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="doe"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                        <FaUser className="icon" aria-hidden="true" />
                    </div>
                    <label htmlFor="email">Email:</label>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FaEnvelope className="icon" aria-hidden="true" />
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
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <div className="input-group">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {showConfirmPassword ? (
                            <FaEyeSlash
                                className="icon"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                style={{cursor: "pointer"}}
                                aria-label="Hide password"
                                role="button"
                                tabIndex={0}
                            />
                        ) : (
                            <FaEye
                                className="icon"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                style={{cursor: "pointer"}}
                                aria-label="Show password"
                                role="button"
                                tabIndex={0}
                            />
                        )}
                    </div>
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                    <div className="login-link">
                        <p>
                            Already have an account? <Link to="/login">Login here</Link>
                        </p>
                    </div>
                </form>
            </main>
        </div>
    );
}
