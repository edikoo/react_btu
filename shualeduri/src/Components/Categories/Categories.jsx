import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import { Container, Button, Row, Col , Card } from 'react-bootstrap';

import {

    Link

  } from 'react-router-dom';
function Categories(props)
{
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [backupList, setbackupList] = useState([]);

    useEffect(() => {
        axios
          .get('https://api.chucknorris.io/jokes/categories')
          .then((response) => {
            setList(response.data);
            setbackupList(response.data);
            setLoading(false);
          })
          .catch((err) => console.error('[FirstPage.jsx]', err.message));
      }, []);

      var filterList = (event) => {
        var updatedList = list;
        updatedList = updatedList.filter(function(list) {
          return (
            list.toLowerCase().search(event.target.value.toLowerCase()) !==
            -1
          );
        });
        setbackupList(updatedList)
    };

      var content;
        content = backupList.map((item) => {
            return (
                <tr key={item}>
                    <td><Link to={`/openCategory/${item}`}>{item}</Link></td>
                </tr>

            );
        });

      if(!loading)
      {
          return(
              <div className="mb-30" >
                  <br />

                  <input type="text" placeholder="გაფილტვრა" onChange={filterList} className="form-control filter"  />
                  <br />
                  <Container style={{ backgroundColor: "#2d2d2d", paddingTop: "10px" }}>
                        <Row>
                            {backupList.map((item) =>
                                
                                    <Col sm={backupList.length > 12 ? 3 : 12} key={item} style={{ marginBottom: "10px" }}>   
                                        <Link to={`/openCategory/${item}`}>         
                                        <Card>
                                            <Card.Body>
                                                <Card.Title style={{ color: "black" }}>{item}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        </Link>   
                                    </Col>
                             
                            )}
                        </Row>
                    </Container>

              </div>
          )
      }
      else{
          return(
              <div>
                  <div className="spinner-border text-info align-self-center" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
                  <br />
                  <br />
              </div>
  
  
          )
  
      }
}

export default Categories;