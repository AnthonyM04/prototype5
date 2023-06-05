import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layouts/AppLayout";

export default function About() {
    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                        <h3>ABOUT</h3>
                        <p> In computer network communications, the HTTP 404, 404 not found, 404, 404 error, page not found or file not found error message is a hypertext transfer protocol (HTTP) standard response code, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested. The error may also be used when a server does not wish to disclose whether it has the requested information.</p>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}