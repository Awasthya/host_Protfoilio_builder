import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const MyInfoCard = (props) => {
    const History = useHistory();
    const [user, setUser] = useState({header:"",firstName:"",lastname:"",description:"",Email:"",phone:""});
    
    const { id } = useParams();
    const UserInfo = async () => {
        try { 
            console.log(id);
            const res = await fetch(`/getdata/${id}`, {
            
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                    
                  },
                  credentials:'include'
               
                
            });
            const data = await res.json();
          //  console.log(data);
                setUser(data);
          } catch (err) {
            console.log(err);
            }
    }
    const storeData = async (e) => {
        e.preventDefault();
        
       const { header,firstName, lastName, description, Email, phone} = user;
        const res = await fetch(`/Updatepersonal/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
               firstName, lastName, description, Email, phone
            })
            
        });
        
        const data = await res.json();
        
        if (!data) {
            window.alert("data is not stored");
        } else {
            window.alert('changes made');
            
        }
    }
    useEffect(() => {
        UserInfo();
    }, []);
    
    let name,value;
    
    const handleInput = (event) =>{
        name = event.target.name;
        value = event.target.value;
        
        setUser({ ...user, [name]: value });
        
        console.log(value);
    }
    return (
        <div className='MainContaint'>
      <div className='container'>
          <div className='heading text-center'>
          <h1> {props.header} </h1>
          </div>     
        <form method="POST" className="register-form" id="register-form" action=''>
        <div className="form-group"s>
        
        <label for="name"></label>
        <input type="text" name="firstName" id="name"
        value={user.firstName}
        onChange={handleInput}
        placeholder= {props.input1}/>
                  </div>
                  <div className="form-group">
        <label for="name"></label>
                      <input type="text" name="lastName" id="name"
                          value={user.lastName}
                          onChange={handleInput}
                          placeholder={props.input2} />
                    </div>
                    <div className="form-group">
                        <label for="email"></label>
                        <input type="email" name="Email" id="email"
                        value={user.Email}
                        onChange={handleInput}
                        placeholder={props.input3}/>
                    </div>
                    <div className="form-group">
                        <label for="Phone"></label>
                        <input type="text" name="description" id="phone"
                       value={user.description}
                        onChange={handleInput}
                        placeholder={props.input4}/>
                    </div>
                    <div className="form-group  ">
                        <label for="Phone"></label>
                        <input type="text" name="phone" id="phone"
                        value={user.phone}
                        onChange={handleInput}
                        placeholder={props.input5}/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit"  onClick = {storeData} name="signup" id="signup" className="form-submit" value="Register"/>
                    </div>
                </form>
              </div>
    </div>
  )
}

export default MyInfoCard

