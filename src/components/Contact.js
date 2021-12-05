import React from "react";
import axios  from "axios";
import { useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";

const Contact=()=>{

const [contact,setContact]=useState([])
const {id: val} = useParams();


useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/?id='+val)
        .then((res)=>{
            setContact(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[val]);

return (
    <div>
      {contact.map((item) => {
        return (

  <Card border="success" className="cont_details" style={{ width: '30rem'  }} key={item.id}>
    <Card.Header>Contact Details</Card.Header>
    <Card.Body>
      <ul className="dash brand">
            
            <div className='back'>
                <Link className="btn btn-primary" to='/'>Back</Link>
            </div>

            <li className='brand'>
                <strong>Name: </strong> {item.name}
            </li>
            <li>
                <strong>Username: </strong>{item.username}</li>
            <li>
                <strong>Email: </strong>{item.email}</li>
            <li>
                <strong>Phone: </strong> {item.phone}
            </li>
            <li>
                <strong>Company: </strong> {item.company.name}
            </li>
            <li>
                <strong>Website: </strong> {item.website}
            </li>
            <li>
                <strong>address:</strong>
            </li>
            <ul>
                <li>
                    <strong>Street:</strong> {item.address.street}     
                </li>
                <li>
                    <strong>Suite:</strong> {item.address.suite}
                </li>
                <li>
                    <strong>City:</strong> {item.address.city}
                </li>
                <li>
                    <strong>Zip code:</strong> {item.address.zipcode}
                </li>
            </ul>
              

            </ul>
    </Card.Body>
  </Card>
  

        );
      })}
    </div>
);
};

export default Contact;







