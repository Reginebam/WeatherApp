import React from 'react';
import './Signin.css';



function Signin(){
return(
 <div className='Row'> 
<div className="Div">

    
    <p className='textSign'>Login</p>

    <form className="Gildas">
        <label for="uname">User Name</label>
        <input type="text" placeholder="Username.."></input>

        <label for="pword">Password</label>
        <input type="text" placeholder="Passsword.."></input>
    <p className="checkSub">
        <input type="checkbox" ></input>
        <label for="remember me">Remember me</label><br/><br/>
        <button type="submit">Submit</button>
        </p>
    </form>
    <p><h5>Dont have a account <a href="Signup">Sign in</a></h5>
    <h6>
    <a href="www.forgetpassword.com"> forget your password</a>
    </h6>

    </p>
</div>
</div>
);

}




export default Signin;