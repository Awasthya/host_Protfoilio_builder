import React from "react"

import { NavLink } from 'react-router-dom';
import './Cards.css';
const Card = (props) => {
  const desc = props.description;
  let desclines = []
  console.log(typeof desc);
  if(desc !== undefined){
    console.log('Rock')
    desclines = desc.split("\\n");
}
console.log(desclines);
  return (
    <div className="outer">
      <div className='demo1 btn_shadow card'>
        <div className='title_content d_flex'>
          
          { 
   ( () => {if(props.header === 'Education') {
      return  ( <>
        <div className='div1'> 
          <h2>{props.college}</h2>
                    <p>{props.title}</p>
                    <p>CGPA {props.CGPA}</p>
        </div>
        <div className='div2'>
                  <span>{props.City}-{props.state}</span>
              <span> {props.Location}</span>
        </div>
        <div className={props.visitor === 'false' ? "" : "Invisible" }>
        <NavLink to={`updateeducation/${props.id}`}> <button className='adjust' >
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16 ">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg></button> </NavLink>
          <NavLink to={`DeleteEducationdata/${props.id}`}> <button className='adjust1' >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button> </NavLink>
        </div>
        </>);
            }
            })()
          }
         { 
   ( () => {if(props.header === 'Experience') {
      return  ( <>
        <div className='div1'> 
          <h2>{props.companyName}</h2>
          <p><strong>Desgination :</strong> {props.designation}</p>
          <ul style={{ listStyleType: 'disc' }}>
              {
                
                desclines?.map((lines) => {
                  console.log('hii');
                 return  (
                  <>
                    <li>{lines}</li>
                  </>
                  )
                })
              }
          </ul>
          <span>{props.workDuration}</span>
        </div>
        <div className='div2'>
                
              <span> {props.state}</span>
        </div>
        <div className={props.visitor === 'false' ? "" : "Invisible" }>
        <div class="UpdateDelete">
            <NavLink to={`updateExperience/${props.id}`}> <button className='adjust' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16 ">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg></button> </NavLink>
              <NavLink to={`DeleteExperience/${props.id}`}> <button className='adjust1' >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg></button> </NavLink>
          </div>
        </div>
              </>);
            }
            })()
          }
          
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Card