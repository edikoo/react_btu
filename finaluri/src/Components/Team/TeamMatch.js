import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import axios from 'axios';

import { fetchAreas } from '../../HttpRequest/Http';
import { fetchAreasDis } from '../../actions/areaActions'

import {
    Link
  } from 'react-router-dom';

function TeamMatch(props)
{

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
        //aq unda iyos ${props.match.params.id}
          .get(`http://api.football-data.org/v2/teams/${props.match.params.id}/matches`, {headers: {"X-Auth-Token": "16138bb845eb491585407156f83b0b4a"}})
          .then((res) => {
            setList(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      console.log(list);

      var content = '';
      if(!loading)
      {

        content = list.matches.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.competition.name}</td>
                    <td>{item.stage}</td>
                    <td>{item.group}</td>
                </tr>
            );
        });
      }


      if(!loading)
      {
          return(
              <div className="mb-30" >
                  კონკრეტული Team-ის Match-ის როადენობა { list.count }
                  <table striped bordered hover variant="dark" className="table-striped table-bordered ">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>დასახელება</th>
                              <th>stage</th>
                              <th>group</th>
                          </tr>
                      </thead>
                      <tbody>
                         {content}
                      </tbody>
                  </table>
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



export default TeamMatch;

