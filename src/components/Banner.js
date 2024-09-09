import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return(
    <section className={"banner"} id={"home"}>
        <Container>
            <Row className={"align-items-center"}>
                <Col xs={12} md={6} xl={7}>
                    <span className={"tagline"}>Welcome to my Portfolio</span>
                    <h1>{"I'm a Junior "}<span className={"wrap"}>Software Engineer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <button className={"tbd"} onClick={() => console.log("Stay in touch")}><span>Let's connect</span><ArrowRightCircle size={24}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt={"Header img"}/>
                </Col>
            </Row>
        </Container>
    </section>
    );
}