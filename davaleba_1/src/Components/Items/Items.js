import React, {useState} from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'


function Items({itemsList, catList, selectedCategoryId})
{
    const [items, setitems] = useState(itemsList);

    const removePeople = (index) => {
        items.splice(index, 1);
        setitems([...items]);
    }

    

    if(selectedCategoryId === 0)
    {
        return(

            <Container style={{ backgroundColor: "#2d2d2d", paddingTop: "10px" }}>
                <Row>
                    {items.map((item, index) =>
                        <Col sm={3} key={index} style={{ marginBottom: "10px" }}>               
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        პროდუქტის კატეგორია -
                                        {
                                            catList.find(({ catId }) => catId === item.catId).catTitle
                                        }
                                    </Card.Text>
                                    <Button variant="primary" onClick={removePeople.bind(this, index)}>წაშლა</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>

        );
    }
    else
    {
        return(

            <Container style={{ backgroundColor: "#2d2d2d", paddingTop: "10px" }}>
                <Row>
                    {items.filter(i => i.catId === selectedCategoryId).map((item, index) =>
                        <Col sm={3} key={index} style={{ marginBottom: "10px" }}>               
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        პროდუქტის კატეგორია -
                                        {
                                            catList.find(({ catId }) => catId === item.catId).catTitle
                                        }
                                    </Card.Text>
                                    <Button variant="primary" onClick={removePeople.bind(this, index)}>წაშლა</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
            
        );
    }

}


export default Items;