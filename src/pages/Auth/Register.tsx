import { useState } from "react";
import { Link } from "react-router-dom";
import LogoContainer from "../../components/LogoContainer/LogoContainer";

export default function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Add validation if needed
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        // Handle registration logic here (API call, etc.)
        console.log("Registering:", { name, surname, email, password });
    };

    return (
        <div className="register-page">
            <LogoContainer />
            <main className="register-container">
                <form onSubmit={handleSubmit} className="register-form">
                    <h1 className="form-title">Register</h1>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="john"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="bx bxs-lock-alt" aria-hidden="true"></i>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm_password">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <i className="bx bxs-lock" aria-hidden="true"></i>
                    </div>
                    <button type="submit" className="btn-primary">
                        Register
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
