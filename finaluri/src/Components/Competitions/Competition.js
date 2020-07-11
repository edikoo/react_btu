import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';



function Competition(props)
{
    console.log(props.match.params);
    return(
        <div>მოცეემულიუ Competition-ის აიდია {props.match.params.id}
        </div>
    )
}

export default Competition;