import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home" className={"logo"}>
                    <img src={logo} alt={"logo"}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#portfolio" className={activeLink === "portfolio" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("portfolio")}>Portfolio</Nav.Link>
                        <Nav.Link href="#hobbys" className={activeLink === "hobbys" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("hobbys")}>Hobbys</Nav.Link>
                    </Nav>
                    <span className={"navbar-text"}>
                        <div className={"social-icon"}>
                            <a href={"https://www.linkedin.com/in/adrian-frei-0883951b7"} target={"_blank"}><img src={navIcon1} alt={"social media logo, linkedIn"}/></a>
                            <a href={"https://github.com/4dZombie"} target={"_blank"}><img src={navIcon2} alt={"social media logo, GitHub"}/></a>
                        </div>
                        <button className={"tbd"} onClick={() => console.log("Stay in touch")}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}