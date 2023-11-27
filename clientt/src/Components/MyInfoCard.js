import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../App";

const MyInfoCard = (props) => {
    const History = useHistory();
    const [user, setUser] = useState({email :"",header:"",input1:"",input2:"",input3:"",input4:"",input5:"",input6:""});
    const [avdata, setdata] = useState({});
    const [profileimage , setImage] = useState("");
    const userInfo = async (e) => {
        try {
    
            const response = await fetch('/getdata', {
              headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
                
              },
              credentials:'include'
            });
            
            const data = await response.json(); 
            setUser({...user, email: data.email});
            if (response.status !== 200) {
      
              const error = new Error(response.error);
              throw error;
            }
          } catch (err) {
            //console.log(err);
            History.push('./signin');
            }
    }
    const storeData = async (e) => {
        e.preventDefault();
        const { email,header,input1, input2, input3, input4, input5,input6 } = user;
        const res = await fetch("/storeData", {
            method: "POST",
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                email,header,input1,input2,input3,input4,input5,input6,profileimage
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
     // console.log(props.header,props)
        userInfo();
    }, []);
    
    let name,value;

    const handleInput = (event) =>{
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
        
       // console.log(value);
    }
  return (
    <div className='MainContaint'>
      <div className='container'>
          <div className='heading text-center'>
          <h1> {props.header} </h1>
          </div>     
        <form method="POST" className="register-form" id="register-form" action='' enctype="multipart/form-data">
        <div className="form-group"s>
        <label for="name"></label>
        <input type="text" name="header" id="header"
        value={user.header = props.header}
                        onChange={handleInput}
                          placeholder= {props.header}/>
                  </div>    
         <div className="form-group">
        <label for="name"></label>
        <input type="text" name="input1" id="name"
        value={user.input1}
                        onChange={handleInput}
                          placeholder= {props.input1}/>
                  </div>
                  { (props.input4 != "" )?
                  <div className="form-group">
                    <label for="name"></label>
                      <input type="text" name="input2" id="name"
                          value={user.input2}
                          onChange={handleInput}
                          placeholder={props.input2} />
                    </div> : <></>
                  }
                    <div className="form-group">
                        <label for="email"></label>
                        <input type="email" name="input3" id="email"
                        value={user.input3}
                        onChange={handleInput}
                        placeholder={props.input3}/>
          </div>
          { (props.input4 != "" )?
                    <div className="form-group">
                        <label for="Phone"></label>
                        <input type="text" name="input4" id="phone"
                        value={user.input4}
                        onChange={handleInput}
                        placeholder={props.input4}/>
          </div>:<div></div>}
          { (props.input5 != "" )?
                    <div className="form-group  ">
                        <label for="Phone"></label>
                        <input type="text" name="input5" id="phone"
                        value={user.input5}
                        onChange={handleInput}
                        placeholder={props.input5}/>
                       
          </div>:<div></div>
          }
          
            
          
                    
                    <div className="form-group form-button">
                        <input type="submit"  onClick = {storeData} name="signup" id="signup" className="form-submit" value="Done"/>
                    </div>
                </form>
              </div>
    </div>
  )
}

export default MyInfoCard
