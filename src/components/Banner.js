import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Backend Developer", "Frontend Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
    },delta)
        return () => { clearInterval(ticker); }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
    <section className={"banner"} id={"home"}>
        <Container>
            <Row className={"align-items-center"}>
                <Col xs={12} md={6} xl={7}>
                    <span className={"tagline"}>Welcome to my Portfolio</span>
                    <h1>{"I'm a Junior "}<span className={"wrap"}>{text}</span></h1>
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