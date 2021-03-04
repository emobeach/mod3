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
import Thoughts from './components/Thoughts'


class App extends React.Component {
  render(){
    return (
      <Thoughts /> 
    )
  }
}

export default App;
