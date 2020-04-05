import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'

function Navbar(props)
{
    return(

        <Container style={{ backgroundColor: "#2d2d2d" }}>
            <Nav defaultActiveKey="/home" as="ul">

            {props.cats.map((cat) => 
                <Nav.Item as="li" key={cat.catId}>
                    <Nav.Link eventKey={`link-${cat.catId}`} className="navLink" onClick={() => props.onSelectCategory(cat.catId)}>{cat.catTitle}</Nav.Link>
                </Nav.Item>
            )}

            </Nav>
        </Container>
        
    );
}

export default Navbar;