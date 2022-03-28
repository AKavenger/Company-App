import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Container} from 'react-bootstrap';

function Sidebar(){
  return (
    <div>
    <Navbar bg="dark">
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
           activeKey="/home"
           onSelect={selectedKey => alert(`selected ${selectedKey}`)}
           >
               <div className="sidebar-sticky"></div>
           <Nav.Item>
               <Nav.Link href="/home">Dashboard</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link eventKey="menu: 1">Users</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link eventKey="menu: 2">Messages</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link eventKey="menu: 3">Analytics</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link eventKey="menu: 3">Order</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link eventKey="menu: 3">Saved</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link eventKey="menu: 3">Settings</Nav.Link>
           </Nav.Item>
           </Nav>
      </Navbar>
      </div>
  )
}

export default Sidebar;
