import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import axios from 'axios';



import {
    Link
  } from 'react-router-dom';


 
class Teams extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
        data: [],
      loading: true
    };
  }
 
  componentDidMount() {

    axios
    //aq unda iyos ${props.match.params.id}
      .get(`http://api.football-data.org/v2/competitions/2000/teams`, {headers: {"X-Auth-Token": "16138bb845eb491585407156f83b0b4a"}})
      .then((res) => {
        this.setState({ data: res.data });
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
      

  }

  render() {
    const { data, loading } = this.state;
    var content = '';

    if(!loading)
    {
      content = data.teams.map((item) => {
          return (
              <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.shortName}</td>
                  <td>{item.tla}</td>
                  <td><Link to={`/openTeamMatch/${item.id}`}>Link</Link></td> 
              </tr>
          );
      });
    }

    if (loading) {
        return (
            <div>
                <div className="spinner-border text-info align-self-center" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <br />
                <br />
         </div>
        );
      }
   
      return (
        <div className="mb-30" >
            Teamebis როადენობა { data.count }
            <table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>shortName</th>
                        <th>tla</th>
                        <th>Matchs</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
      );

 

    return (
    <ul>
        
    </ul>
    );
}
 
 
}




export default Teams;

