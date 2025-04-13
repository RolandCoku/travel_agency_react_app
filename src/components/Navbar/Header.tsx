import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import logo from '../../assets/images/full-logo.webp'


export default function App() {
    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/">
                    <img src={logo} alt="Logo" className="h-8" />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}


// import {NavLink, Link} from 'react-router-dom'
//
// export default function Navbar() {
//     return (
//         <header className="navbar">
//             <div className="container">
//                 {/* Logo */}
//                 <div className="logo">
//                     <Link to="/">
//                         <img src={logo} alt="logo"/>
//                     </Link>
//                 </div>
//
//                 {/* Search bar */}
//
//
//                 {/* Navigation links */}
//                 <nav className="nav-links">
//                     <NavLink to='/about'>about</NavLink>
//                     <NavLink to='/contact'>contact</NavLink>
//                     <NavLink to='/login'>login</NavLink>
//                     <NavLink to='/register'>register</NavLink>
//                 </nav>
//             </div>
//         </header>
//     )
// }