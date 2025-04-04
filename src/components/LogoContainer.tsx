import { useEffect } from "react";
import logo2 from "../assets/images/logo-2.png";
import logo1 from "../assets/images/logo-1.png";

// Preload images
const preloadImages = () => {
    const img1 = new Image();
    const img2 = new Image();
    img1.src = logo1;
    img2.src = logo2;
};

export default function LogoContainer(){
    useEffect(() => {
        preloadImages();
    }, []);

    return(
        <div className="logo-container">
            <div className="image-container">
                <img className="login-image" src={logo2} alt="Logo 2" loading="eager" />
                <img className="login-image" src={logo1} alt="Logo 1" loading="eager" />
            </div>
        </div>
    )
}