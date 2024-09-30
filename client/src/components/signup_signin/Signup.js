import React, { useState } from 'react';
import './signup.css';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [logdata, setData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    repassword: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, repassword } = logdata; // Changed from udata
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, mobile, password, repassword
        })
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        toast.error("Invalid Details 👎!", {
          position: "top-center"
        });
      } else {
        setData({
          fname: "", email: "", mobile: "", password: "", repassword: ""
        });
        toast.success("Registration Successfully done 😃!", {
          position: "top-center"
        });
      }
    } catch (error) {
      console.log("Frontend error: " + error.message);
    }
  };

  return (
    <>
      <section>
        <div className='sign_container'>
          <div className='sign_header'>
            <img src="./blacklogoamazon.png" alt='logo' />
          </div>
          <div className='sign_form'>
            <form method='POST'>
              <h1>Sign Up</h1>
              <div className='form_data'>
                <label htmlFor='fname'>Name</label>
                <input type='text' name='fname' id='fname' onChange={adddata} value={logdata.fname} />
              </div>
              <div className='form_data'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' onChange={adddata} value={logdata.email} />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input type="number" name="mobile" onChange={adddata} value={logdata.mobile} />
              </div>
              <div className='form_data'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' onChange={adddata} value={logdata.password} />
              </div>
              <div className='form_data'>
                <label htmlFor='password'>Re-enter password</label>
                <input type='password' name='repassword' id='password' onChange={adddata} value={logdata.repassword} />
              </div>
              <button className='signin_btn' onClick={senddata}>Continue</button>
              <Divider />
              <div className='signin_info'>
                <p>Already have an Account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Signup;
