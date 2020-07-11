import React from 'react';
import axios from 'axios';
import { fetchAreasDis } from '../actions/areaActions'

export function fetchAreas(dispatch) {
    return function(dispatch) {
      return axios.get('http://api.football-data.org/v2/areas', { headers: {"X-Auth-Token": "16138bb845eb491585407156f83b0b4a"}})
        .then(({ data }) => {
        dispatch(fetchAreasDis(data));
      });
    };
}

