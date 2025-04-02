import "./LogoContainer.css";
import logo2 from "../../assets/images/logo-2.png";
import logo1 from "../../assets/images/logo-1.png";

export default function LogoContainer(){
    return(
        <div className="logo-container">
            <div className="image-container">
                <img className="login-image" src={logo2} alt="Logo 2" />
                <img className="login-image" src={logo1} alt="Logo 1" />
            </div>
        </div>
    )
}