import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import icon from "../assets/icon.png"

function Header(props) {

    const {roommate, history, greeting} = props;

    return (
        <Container className="p-2 pr-4 mx-0 mb-3 h3 border-bottom border-dark" style={{backgroundColor: "rgba(128,128,128,0.5)", boxShadow: "rgba(0,0,0,0.5) 0rem 0.5rem 2rem", maxWidth: "100vw", overflow: "hidden"}}>
            <Row>
                <Col className="text-left">
                    <button type="button" className="btn btn-link" onClick={ () => history.push('/')}>
                        {/*Icon and they were... Roommates*/}
                        <img src={icon} alt="Smiling Face with Smiling Eyes and Hand Covering Mouth" style={{height:"2rem", width:"2rem"}}/>
                        <span className="pl-2 h3 position-relative" style={{top: "0.4rem", color: "black"}}>Roommates</span>
                        <small className="pl-2 position-relative h6 text-dark" style={{top: "-1.15rem", left: "-10.25rem"}}>and they were...</small>
                    </button>
                </Col>
                <Col className="text-right d-flex align-items-center justify-content-end">
                    <span className="h5 m-0 pr-3">
                        {greeting}, {roommate.username}
                    </span>
                    <Link to="/logout" className="btn btn-primary font-weight-bold">
                        Log Out
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Header