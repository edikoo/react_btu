import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

function Carousels(props)
{
    return(

        <Container>
            <Carousel>

                {props.images.map((image, index) => 
                    <Carousel.Item key={index}>
                        <img
                        className="d-block w-100"
                        src={image.imageSrc}
                        alt="First slide"
                        style={{ width:'100%' }}
                        />
                        <Carousel.Caption>
                        <h3 className="carouselText">{image.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}

            </Carousel>
        </Container>
        
    );
}

export default Carousels;