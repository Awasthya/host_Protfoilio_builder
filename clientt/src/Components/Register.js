import React, { useState } from 'react';
import signup from '../images/signup-image.jpg';
import {NavLink,useHistory} from 'react-router-dom';
const Register = () => {
    const History = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone : "",
        password: "",
        cpassword: ""
    });
    let name,value;

    const handleInput = (event) =>{
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
        
        console.log(value);
    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers : {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, email,phone,password, cpassword
            })           
        });           

        
        const data = await res.json();
        console.log('hel');
        if (data.status === 422 || !data ) {
            window.alert("Invalid Registartion");    
        } else {
            window.alert("Registartion successful");
            History.push('/signin');
        }
    }
  return (
  <>
   <div className="main">
<section className="signup">
    <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" className="register-form" id="register-form" action=''>
                    <div className="form-group">
        <label for="name"></label>
        <input type="text" name="name" id="name"
        value={user.name}
                        onChange={handleInput}
        placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <label for="email"></label>
                        <input type="email" name="email" id="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="Your Email"/>
                                  </div>
                        <div className="form-group">
                        <label for="Phone"></label>
                        <input type="text" name="phone" id="phone"
                        value={user.phone}
                        onChange={handleInput}
                        placeholder="Your Number"/>
                    </div>
                    <div className="form-group">
                        <label for="pass"></label>
                        <input type="password" name="password" id="pass"
                        value={user.password}
                        onChange={handleInput}
                        placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="repass"></label>
                        <input type="password" name="cpassword" id="re_pass"
                        value={user.cpassword}
                        onChange={handleInput}
                        placeholder="Repeat your password"/>
                    </div>
               
                    <div className="form-group form-button">
                        <input type="submit"  onClick = {postData} name="signup" id="signup" className="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div className="signup-image">
                <figure><img src={signup} alt="sign up image"/></figure>
                <NavLink to="/signin">Already an member</NavLink>
            </div>
        </div>
    </div>
</section>

</div>
  </>
  )
}

export default Register
