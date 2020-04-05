import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

class Insert extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            image: '../Images/Items/skami_1.jpg',
            errormessage: '' 
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let title = event.target.title;
        let catId = event.target.catId;
        let err = '';

        if (title.value !== "" && catId.value !== "") {
            err = '';
            const obj = {'title':title.value, 'image':this.state.image, 'catId': Number(catId.value)};
            this.props.appendDataInItemList(obj);
        }
        else
        {
            err = <strong className="error">გთხოვთ შეავსოთ ყველა ველი</strong>;
        }
        this.setState({errormessage: err});
    }


    render()
    {
        return(
            <Container style={{ backgroundColor: "#2d2d2d"}}>
                <form onSubmit={this.mySubmitHandler}>
                    <Row>
                        <Col sm={5}>  
                            <Form.Group controlId="formBasicEmail"  className="mgt-20">
                                <Form.Control type="text" name="title" placeholder="შეიყვანეთ პროდუქტის სათაური" />
                            </Form.Group>
                        </Col>
                        <Col sm={5}>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="mgt-20">
                                <Form.Control as="select" name="catId">
                                <option value="">აირჩიეთ კატეგორია</option>

                                {this.props.catList.map((cat,index) => 
                                    <option key={index} value={cat.catId}>{cat.catTitle}</option>
                                )}
                                
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col sm={2}>
                            <Button variant="success" type="submit" className="mgt-20 fullwidth">დამატება</Button>
                        </Col>
                    </Row>
                </form>
                {this.state.errormessage}
            </Container>
        );
    }
}


export default Insert;