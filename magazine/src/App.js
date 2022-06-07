import Addpost from './Addpost';
import './css/App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Detailpage from './Detailpage';



function App() {

  return (
    <div className="App">
      <Route path="/" exact><Login/></Route> 
      <Route path="/Signup"  component={Signup}></Route>
      <Route path="/Main"  component={Main}></Route>
      <Route path="/Addpost"  component={Addpost}></Route>
      <Route path="/Detailpage"  component={Detailpage}></Route>
    </div>
  );
}


export default App;
