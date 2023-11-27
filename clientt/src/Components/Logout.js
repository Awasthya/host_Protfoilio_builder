import React ,{ useEffect,useContext }from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
//import { useContext } from 'react';
const Logout = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            
        headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json'
            
          },
          credentials:'include'
        }).then((res) => {
            
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            } else {
                dispatch({type:"USER",payload:false})
                window.alert('User Logout');
                history.push('/signin', { replace: true });
            }
        }).catch((err) => {
            window.alert(err);
        })
    })
  return (
    <div>
     <h1>Logout...</h1>
    </div>
  )
}

export default Logout
