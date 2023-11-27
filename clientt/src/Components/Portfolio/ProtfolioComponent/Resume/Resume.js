import React, { useEffect, useState } from "react"
import "./Resume.css"
import Card from "./Cards";
import ResumeApi from './ResumeApi';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const Resume = (props) => {

  const searchval = useParams() ;

  const [user, setUser] = useState({});

  //console.log(fetchdata);
  const callAboutPage = async () => {
    try {
      const response = await fetch('/Info', {
       
        headers: {
          Accept : 'application/json',
          'Content-Type': 'application/json'
          
        },
        credentials:'include'
      });
      
      const data = await response.json();
      setUser(data);
      if (response.status !== 200) {

        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      History.push('./signin');
      }
  }

  const ShowProfile = async () => {
    console.log(searchval);
    try{
    const res = await fetch('/FetchInfoById', {
      method : 'POST',
      headers: { 
        Accept : 'application/json',
        'Content-Type': 'application/json'
        
      },
      credentials:'include',
      body : JSON.stringify({
        id : searchval
      })
    });
    const data = await res.json();
    console.log(data);
    setUser(data);
    if (res.status !== 200) {

      const error = new Error(res.error);
      throw error;
    }
    
  } catch (err) {
    console.log(err);
  }
}
  useEffect(() => {
    
  if(props.visitor === 'false')
    callAboutPage();
  else  
    ShowProfile()
    
  }, []);
  return (
    <>
   
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Resume</h1>
             
          </div>
          <div className='content-section  mtop '>
              <div className='heading'>
                <h1>Education 📚</h1>
              </div>
              <div className='education'>
                {user.education?.map((val, id) => {
                    return <Card key={id} id = {val._id} visitor = {props.visitor} header = "Education" college={val.collegeName}  title={val.DegreeName} CGPA={val.Percentage} City={val.City} state={val.State} Location={val.Location} />
                  
                })}

               
              </div>
            </div>
            <div className='content-section mtop '>
              <div className='heading'>
                <h1>Experience 💻 </h1>
              </div>

              <div className='experience'>
                {user.experienceInfo?.map((val, id) => {
                      return <Card key={id} id = {val._id} visitor = {props.visitor} header = "Experience" companyName={val.companyName}  designation={val.designation} description={val.description} workDuration={val.workDuration} state={val.state}  />
              
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Resume