import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Container} from 'react-bootstrap';

function Item(props){
  return (
    <p>{props.name} ----------------------------------------------------------- {props.price}</p>
  )
}

export default Item;
