import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function CategoryItem({match})
{
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(true);

    useEffect(() => {
        axios
          .get('https://api.chucknorris.io/jokes/random?category='+match.params.id)
          .then((response) => {
            setItem(response.data);
            setLoading(false);
          })
          .catch((err) => console.error('[ss.jsx]', err.message));
      }, []);

    return(
        <div>
            <br />
            <h2 onClick={() => history.replace("/")} className="cursor" style={{ color: "red" }}>უკან გასვლა</h2>
            <br />
            სურათი -                  
                         <img
                            src={item.icon_url}
                        />

            <br />
            კატეგორია - { item.categories }
            <br />
            ტექსტი - { item.value }
        </div>
    );

}

export default CategoryItem;