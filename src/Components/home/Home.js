import React, {useState} from 'react';
import '../signin/Signin.css';
import Signin from '../signin/Signin'
import Search from '../Search';
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
return(
   <div>
   <p><Search/></p>
   <p  ><Signin/></p>


   </div>
)}
   export default Home;