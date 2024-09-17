import React, { useState } from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

   let [Email, setEmail] = useState();
   let [Pass, setPass] = useState();

   const Navigate = useNavigate();

   let handelsubmit = (event) => {
      event.preventDefault();
      let detail =
      {
         "email":Email,
         "password":Pass,
     }
      console.log(detail)
  
  axios.post("http://157.66.191.24:3003/api/login",detail).then((response)=>{
   console.log(response.data);
   if(response.data.result === "true"){
      toast.success(response.data.msg);
      localStorage.setItem("userid",response.data.data._id)
      setTimeout(()=>{
         Navigate("/")
      },3000)
      
   
   }
   else{
      toast.error(response.data.msg)
   }
  
   
 }).catch((error)=>{
   console.log(error);
   // toast.error(response.data.msg);
    
 })


}
   return (
      <>
         <div id="page-top">

            <div id="wrapper">
               <div id="content-wrapper">
                  <div className="container-fluid pb-0">
                     <div className="row justify-content-center no-gutters">
                       
                              <div className="col-md-5 p-5 bg-white full-height">
                                 <div className="login-main-left">
                                    <div className="text-center mb-5 login-main-left-header pt-4">
                                       <img src="img/favicon.png" class="img-fluid" alt="LOGO" />
                                       <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
                                       <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
                                    </div>
                                    <form action="https://askbootstrap.com/preview/vidoe-v1-1/index.html" onSubmit={handelsubmit}>
                                       <div className="form-group">
                                          <label>Email</label>
                                          <input type="text" 
                                                 class="form-control" 
                                                 placeHolder="Enter Email"
                                                 value={Email}
                                                 onChange={(e) => (setEmail(e.target.value))} />
                                       </div>
                                       <div className="form-group">
                                          <label>Password</label>
                                          <input type="password" 
                                                 class="form-control"
                                                 placeHolder="Password"
                                                 value={Pass}
                                                 onChange={(e) =>(setPass(e.target.value))} />
                                       </div>
                                       <div className="mt-4">
                                          <div className="row">
                                             <div className="col-12">
                                               <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Sign In</button>
                                             </div>
                                          </div>
                                       </div>
                                    </form>
                                    <div className="text-center mt-5">
                                       <p class="light-gray">Don’t have an account? <Link to="/register"><strong>Sign Up</strong></Link></p>
                                    </div>
                                 </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer/>
      </>
   )
}

export default Login
