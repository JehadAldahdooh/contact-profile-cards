import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link  } from 'react-router-dom';

const Contacts= () => {
    const [contacts, setContatcs] = useState([]);
    const fecthcontacts=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setContatcs(res.data);
        }).catch((err)=>{
            console.log(err)
        });
    };
    
    useEffect(()=>{
        fecthcontacts();
    },[]);
    
return (
<div>
    <div className='item-container'>
        {contacts.map((contact)=>(
                    <div className='card' key={contact.id}>
                        <div id="profileImage">
                            <div id="name">
                                {contact.name.charAt(0)}
                            </div>
                        </div>
                        <p>{contact.name}</p>
                        <p className="username">@{contact.username}</p>
                        <a  className="buttonlink" href={"http://"+contact.website}>{contact.website}</a>
                        <Link className="btn btn-primary" to={`/${contact.id}`}>View</Link>
                    </div>
        ))}
      </div>
</div>
);
}

export default Contacts;






















































































