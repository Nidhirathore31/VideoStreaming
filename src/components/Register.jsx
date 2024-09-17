import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
   let [Uname, setUname] = useState();
   let [Email, setEmail] = useState();
   let [Pass, setPass] = useState();
   let [Cnfrmpass, setCnfrmpass] = useState();
   let [Gender, setGender] = useState();


   let handelsubmit = (event) => {
      event.preventDefault()
      if( Pass != Cnfrmpass ){
         toast.error("Password should be same!")
      }
      let details =

      {
         "username":Uname,
         "email":Email,
         "password":Pass,
         "confirm_password":Cnfrmpass,
         "gender":Gender,
         "fcm":"abc"
     }
      console.log(details)
  
  axios.post("http://157.66.191.24:3003/api/signup",details).then((response)=>{
   console.log(response.data);
   toast.success(response.data.msg);
 }).catch((error)=>{
   console.log(error);
   toast.error(response.data.msg)
 })


}
   return (
      <>
       <div id="page-top">
      <div id="wrapper">
         <div id="content-wrapper">
            <div className="container-fluid pb-0">
                        <div className="row justify-content-center no-gutters">
                           <div className="col-md-5 p-5 bg-white">
                              <div className="login-main-left">
                                 <div className="text-center mb-5 login-main-left-header pt-4">
                                    <img src="img/favicon.png" class="img-fluid" alt="LOGO" />
                                    <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
                                    <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
                                 </div>
                                 <form action="#" onSubmit={handelsubmit}>
                                    <div className="form-group">
                                       <label>User Name</label>
                                       <input type="text"
                                          class="form-control"
                                          placeHolder="Enter User Name"
                                          value={Uname}
                                          onChange={(e) => { setUname(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                       <label>Email</label>
                                       <input type="email"
                                          class="form-control"
                                          placeHolder="Enter Email"
                                          value={Email}
                                          onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                       <label>Password</label>
                                       <input type="text"
                                          class="form-control"
                                          placeHolder="Password"
                                          value={Pass}
                                          onChange={(e) => { setPass(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                       <label>Confirm Password</label>
                                       <input type="text"
                                          class="form-control"
                                          placeHolder="Confirm Password"
                                          value={Cnfrmpass}
                                          onChange={(e) => { setCnfrmpass(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                       <label>Select Your Gender</label><br />
                                       <input name="gendername" onChange={(e) => setGender(e.target.value)} value="male" type="radio" id="male" />
                                       <label for="male">Male</label> <br />
                                       <input name="gendername" onChange={(e) => setGender(e.target.value)} value="female" type="radio" id="female" />
                                       <label for="female">Female</label><br />
                                       <input name="gendername" onChange={(e) => setGender(e.target.value)} value="other" type="radio" id="other" />
                                       <label for="other">Other</label>

                                    </div>
                                    <div className="mt-4">
                                     <button type="submit" className="btn btn-outline-primary btn-block btn-lg" >Sign Up</button>
                                    </div>
                                 </form>
                                 <div className="text-center mt-5">
                                    <p class="light-gray">Already have an Account? <Link to="/login">Sign In</Link></p>
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

export default Register;