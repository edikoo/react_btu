import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';



function Area(props)
{
    
    console.log(props.match.params.id)
    return(
        <div>Area</div>
    )
}

export default Area;