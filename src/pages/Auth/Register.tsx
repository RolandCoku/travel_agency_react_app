import {ChangeEvent, useState, useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoContainer from "../../components/LogoContainer";
import { useAuth } from "../../hooks/useAuth";
import { RegisterData } from "../../types/auth";
import BackgroundImage from "../../components/BackgroundImage";

export default function Register() {
    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { register, error: authError, loading, clearError } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        clearError();
    }, []);

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
            <BackgroundImage />
            <LogoContainer />
            <main className="register-container">
                <form onSubmit={handleSubmit} className="register-form">
                    <h1 className="form-title">Register</h1>
                    {authError && <div className="error-message">{authError}</div>}
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="john"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-user" aria-hidden="true"></i>
                    </div>
                    <div className="input-group">
                        <label htmlFor="surname">Surname:</label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="doe"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-user" aria-hidden="true"></i>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-lock-alt" aria-hidden="true"></i>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <i className="bx bxs-lock" aria-hidden="true"></i>
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
