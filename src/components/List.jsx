import React from "react";
import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Container} from 'react-bootstrap';

function List(){
  return (
    <div className="list">
          <br/>
          <h4>Item ---------------------------------------------------- Price</h4>
          <br/>
          <Item name="HTML5" price="Rs.200/-"/>
          <Item name="CSS3" price="Rs.300/-"/>
          <Item name="JavaScript" price="Rs. 350/-"/>
          <Item name="Node.js" price="Rs. 500/-"/>
          <Item name="Express.js" price="Rs. 520/-"/>
          <Item name="REST API" price="Rs. 500/-"/>
          <Item name="MySQL" price="Rs. 400/-"/>
          <Item name="MongoDB" price="Rs. 600/-"/>
          <Item name="React.js" price="Rs. 1000/-"/>
          <Item name="Git and Github" price="Rs. 470/-"/>
    </div>
  )
}

export default List;
