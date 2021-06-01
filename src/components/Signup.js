import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
function Signup() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                
                            <div class="card-body p-1">
                                <h6 class="card-title">{item.name}</h6>
                                <p class="card-text">{item.msg}</p>
                                <p class="card-text"><i>by {item.username}</i></p>
                            </div>
                        
            ))
            }
        </section>
    );
}

export default Signup;