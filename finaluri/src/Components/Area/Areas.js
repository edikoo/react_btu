import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import axios from 'axios';

import { fetchAreas } from '../../HttpRequest/Http';
import { fetchAreasDis } from '../../actions/areaActions'


function Areas(props)
{


    useEffect(() => {
        props.fetchAreas()
    }, [])


    return(
        <div>
            მატჩები რაოდენობა - {props.areasReducerData.count}
        </div>
        
    )

}

const mapStateToProps = state => {
    return {
        areasReducerData: state.areasReducer
    }
  }
  
const mapDispatchToprops = dispatch => {
    return {
        fetchAreas: () => dispatch(fetchAreas()),
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Areas);

