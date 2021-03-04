import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
*/
import Thought from './components/Thought'


class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Thought />
    </div>
    )
  }
}

export default App;
