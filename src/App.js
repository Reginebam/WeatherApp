/* import React, {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import Sign from './Components/Sign'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Date from './Components/Date'; 
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
<div className="Body">
<div class="row no-gutters">

<div class="col-sm-6 col-md-7"className="col-md-7">

 <h1> <Search/>
</h1>
</div>

<div class="col-6 col-md-4" className="col-md-4"><Sign/></div>
</div>
</div>

  );
}

 */

import React, {useState} from 'react';
import './App.css';

import Home from './Components/home/Home';
import Signup from './Components/signup/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Signin from './Components/signin/Signin';
import User from './Components/userpage/User';


function App() {
  return(

    <Router>

    <div className='app'>
      <nav>
     <ul>
      <Link to='/'> Home </Link>
      <Link to='/Signup'> Sign Up </Link>
      <Link to='/User'> Sign In </Link>
      </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Signup' component={Signup}/>
        <Route exact path='/User' component={User}/>

      </Switch>

          
    </div>

    </Router>

  )
}

export default App;