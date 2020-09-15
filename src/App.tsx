import React, {FC} from 'react';
import './App.scss';
import {Button} from 'antd'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const App:FC = ()=> {
  return (
    <div className="App">
      <Button type='dashed' size='middle'>Antd Button</Button>
      <Router>
        <Link to='/'>Home</Link>
      </Router>
    </div>
  );
}

export default App;
