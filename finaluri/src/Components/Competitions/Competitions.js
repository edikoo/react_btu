import React, { useState, useEffect } from 'react';


import axios from 'axios';
import styles from './Competition.module.css'



import {

    Link

  } from 'react-router-dom';

function Competitions(props)
{


    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
          .get('https://api.football-data.org/v2/competitions', {headers: {"X-Auth-Token": "16138bb845eb491585407156f83b0b4a"}})
          .then((res) => {
            setList(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


      var content = '';
      if(!loading)
      {

        content = list.competitions.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className={styles.name}>{item.name}</td>
                    <td><Link to={`/openTeams/${item.id}`}>Teams</Link></td>
                    <td><Link to={`/openComp/${item.id}`}>Link</Link></td>
                </tr>
            );
        });
      }
      


    if(!loading)
    {
        return(
            <div className="mb-30" >
                Competitions როადენობა { list.count }
                <table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>Teams</th>
                            <th>Link</th>
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



export default Competitions;

