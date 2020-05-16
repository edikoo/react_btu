import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Logout(props)
{
    localStorage.clear();
    window.location.reload();
}

export default Logout;