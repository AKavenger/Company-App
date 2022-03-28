import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import List from './List';

function App() {
  return (
    <div className="big">
    <Sidebar/>
    <div className="small">
    <Header/>
    <List />
    </div>
    </div>
  );
}

export default App;
