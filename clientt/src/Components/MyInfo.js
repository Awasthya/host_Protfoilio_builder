import React, {useContext} from 'react'
import { UserContext } from "../App";
import MyInfoCard from './MyInfoCard'
const MyInfo = () => {
  
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
          <MyInfoCard header = 'personalInfo' input1='Your First Name' input2 = 'Your Last Name' input3='description' input4='Your Email' input5='Your  Phone No' input6= 'Your Image Drive Link'/>
          <MyInfoCard header = 'education'  input1='Your College Name' input2 = 'Degree Name' input3='Percentage' input4='City' input5='State' input6=""/>
          <MyInfoCard header='experienceInfo' input1='Your Company Name' input2='Your Designation' input3='Description (for new line use \n)' input4='Working Duration' input5='State' input6=""/>
      <MyInfoCard header='Skills' input1='Skills' input2="" input3='logo Certificate'  input4="" input5=""input6=""/>
      <MyInfoCard header='projectInfo' input1='Project Name' input2='Title' input3='Description'  input4='Image Link' input5="Project Link" input6=""/>
    </div>
  )
}

export default MyInfo

