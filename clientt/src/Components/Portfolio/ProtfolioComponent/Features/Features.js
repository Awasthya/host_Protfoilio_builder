import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Features.css'
import Card from './Card';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const Features = (props) => {
  const [current,setCurrent] = new useState(3);
  const searchval = useParams();
  const [user, setUser] = useState({});
  const History = useHistory();

  const nextSlider = () => {
    setCurrent(current === user.skillInfo.length-3 ? current : current + 1);
}
const prevSlider = () => {

    setCurrent(current === 3 ? current : current - 1);
}
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
      ShowProfile();
  }, []);
  console.log(user.skillInfo);
  return (
    <div>
      <section className='features top' id = "features">
        <div className='container'>
          <div className="innercontainter">
          <div className='heading'>
            <h1>Skills </h1>
            <h6 className="X">What I Know</h6>
          </div>
       
          <div className='skills '>
        <div className={user?.skillInfo?.length >= 7 ? "" : "skilldeactivator"}>  
            <ArrowCircleLeftIcon className='skillleft'  onClick={prevSlider}/>
            <ArrowCircleRightIcon className='skillright' onClick = {nextSlider}/>
        </div>    
           <div className="Skillrow">
            {user.skillInfo?.map((val, idx) => {
              
            console.log(idx,current);
              return (
                <div
                className={(idx > current-4 && idx <= current+2 ) ? 'skill  ' : 'skill  skilldeactivator'}
                key={idx}>

                    <Card key={idx} skill={val.skill}  logo={val.certificateLogoLink} />
                  
                </div>
            );
           })}
           </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
