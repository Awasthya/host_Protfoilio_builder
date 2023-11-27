import React ,{ useState } from 'react'
import Card from './Card';
import { useEffect } from 'react'; 
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './project.css'
const Project = (props) => {
  
  const [user, setUser] = useState({});
  const searchval = useParams() ;
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
      ShowProfile()
    
  }, []);
  return (
    <div>
      <section className="portfolio top" id="portfolio">
        <div className='container'>
          <div className='heading text-center'>
            <h4> VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK</h4>
            <h1> My Portfolio</h1>
          </div>
          <div className='projectcontent grid'>
            {user.projectInfo?.map((value, index) => {
              return <Card key={index} projectName={value.projectName} title={value.title} description={value.description} Image={value.Image} link = {value.ProjectLink}/>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
