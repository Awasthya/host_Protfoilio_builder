import React, { useState } from 'react';
import './Contact.css';
import { useHistory  } from "react-router-dom";
const Contact = () => {

  const [searchval, setSearch] = useState("");
  const navigate = useHistory();

  const inputEvent = (event) => {
    const data = event.target.value;
    setSearch(data);
  };
  const searchProfile = async(e) => {
    
    e.preventDefault();
    try {
      const res = await fetch('/profile',{
          method : "POST",
           headers : {
            "Content-type": "application/json"
        },
            body: JSON.stringify({
                 searchid:searchval
            })
      });
      console.log(res);
      navigate.push(`/profile/${searchval}`);
    } catch (err) {
      console.log(err);
      }
  }

  return (
    <div className="Contact-pic">
      <div className='searchbar'>
      <h3 ><span className='highlighted-text'>Hii Professionals ,</span><br/> Find Other Professional and know about them</h3>
 
        <input type="text" placeholder='Search....' value={searchval} onChange={inputEvent}  />
        <input type = "button" onClick={searchProfile} />
    </div>
    </div>
  );
}

export default Contact
