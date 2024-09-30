import React, { useState } from 'react'
import './signup.css'

const Signin = () => {

  const [logdata,setData]=useState({
    email:"",
    password:""
  });

  const adddata=(e)=>{
     const {name,value}=e.target;
     
     setData=()=>{
      return{
        ...logdata,
        [name]:value
      }
     }
  }
  return (
    <>
    <section>
      <div className='sign_container'>
      <div className='sign_header'>
        <img src="./blacklogoamazon.png" alt='logo'/>
      </div>
      <div className='sign_form'>
        <form>
          <h1>Sign in</h1>
          <div className='form_data'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' onChange={adddata} value={logdata.email}/>
          </div>
          <div className='form_data'>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' id='password' onChange={adddata} value={logdata.password}/>
          </div>
          <button className='signin_btn'>Continue</button>
        </form>
      </div>
      <div className='create_accountinfo'>
        <p>New to Amazon</p>
        <button onClick={
          () => {
            window.location.href = "http://localhost:3000/register";
        }}>Create your Amazon account</button>
      </div>
      </div>
      </section>
      </>

  )
}

export default Signin