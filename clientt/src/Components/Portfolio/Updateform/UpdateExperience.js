import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const MyInfoCard = (props) => {
    const History = useHistory();
    const [user, setUser] = useState({ companyName : "", designation : "", description : "", workDuration : "", state : ""});
    
    const { id } = useParams();
    const UserInfo = async () => {
        try { 
            console.log(id);
            const res = await fetch(`/getExperience/${id}`, {
            
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                    
                  },
                  credentials:'include'
               
                
            });
            const data = await res.json();
            if(data){
                setUser(data);
            }
          } catch (err) {
            console.log(err);
            History.push('./signin');
            }
    }
    const storeData = async (e) => {
        e.preventDefault();
        
        const {  companyName, designation, description, workDuration, state } = user;
      
        const res = await fetch(`/UpdateExperience/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                companyName, designation, description, workDuration, state
            })
            
        });
        
        const data = await res.json();
        
        if (!data) {
            window.alert("data is not stored");
        } else {
            window.alert('changes made');
            History.push("../about");
            
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
       
        <div className="form-group" s>
        <label for="name"></label>
        <input type="text" name="companyName" id="name"
        value={user.companyName}
        onChange={handleInput}
        placeholder= {props.input1}/>
                  </div>
                  <div className="form-group">
        <label for="name"></label>
                      <input type="text" name="designation" id="name"
                          value={user.designation}
                          onChange={handleInput}
                          placeholder={props.input2} />
                    </div>
                    <div className="form-group">
                        <label for="email"></label>
                        <input type="email" name="description" id="email"
                        value={user.description}
                        onChange={handleInput}
                        placeholder={props.input3}/>
                    </div>
                    <div className="form-group">
                        <label for="Phone"></label>
                        <input type="text" name="workDuration" id="phone"
                       value={user.workDuration}
                        onChange={handleInput}
                        placeholder={props.input4}/>
                    </div>
                    <div className="form-group  ">
                        <label for="Phone"></label>
                        <input type="text" name="state" id="phone"
                        value={user.state}
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

