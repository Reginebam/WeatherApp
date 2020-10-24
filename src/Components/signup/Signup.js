import React from 'react';
import './Signup.css';



function Signup(){
return(
 <div className='Row'> 
<div className="Div">

    
    <p className='textSign'>Register</p>

    <form className="Gildas">
        <label for="uname">First Name</label>
        <input type="text" placeholder="Username.."></input>

        <label for="pword"> Last name</label>
        <input type="text" placeholder="Passsword.."></input>
        <label for="pword"> Password</label>
        <input type="text" placeholder="Passsword.."></input>
    <p className="checkSub">
        <button type="submit">Submit</button>
        </p>
    </form>
</div>
</div>
);

}




export default Signup;