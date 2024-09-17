import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    let[Img,setImg] = useState("");
let [profileData,setProfileData] = useState("");
//console.log("eee",profileData)
let id = localStorage.getItem("userid")

 const SumbitProfile = (e)=>{
e.preventDefault();
const formData = new FormData();
formData.append("profile_image",Img)
formData.append("_id",id)
axios.post("http://157.66.191.24:3003/api/upload_user_image",formData).then((res)=>{
  //console.log("67767res",res)
  profileHandle();
}).catch((error)=>{
  //console.log("eror",error)
})
}

useEffect(()=>{
  profileHandle();
},[0]);
const profileHandle = () =>{
    // e.preventDefault();
   const profileData = {
    _id:id
   };
    axios.post("http://157.66.191.24:3003/api/view_profile",profileData).then((res)=>{
      //console.log("res",res);
      setProfileData(res.data.data);
    }).catch((error)=>{
      //console.log("error",error)
    })
}
    return (

        <>
            <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
                &nbsp;&nbsp;
                <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
                    <i className="fas fa-bars" />
                </button> &nbsp;&nbsp;
                <a className="navbar-brand mr-1" href="index.html"><img className="img-fluid" alt src="img/logo.png" /></a>
                {/* Navbar Search */}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <div className="input-group-append">
                            <button className="btn btn-light" type="button">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Navbar */}
                <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="upload.html">
                            <i className="fas fa-plus-circle fa-fw" />
                            Upload Video
                        </a>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw" />
                            <span className="badge badge-danger">9+</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-edit " /> &nbsp; Action</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star " /> &nbsp; Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw" />
                            <span className="badge badge-success">7</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-edit " /> &nbsp; Action</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star " /> &nbsp; Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
                        <a className="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/* <img alt="Avatar" src="img/user.png" /> */}
                            {profileData?.profile_image ? 

<img className='img' src={`http://157.66.191.24:3003/uploads/`+profileData?.profile_image?.filename} alt=""  /> : 
<img className='img' src="img/user.png" alt=""  /> }
{profileData?.username}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <Link className="dropdown-item" to="/profile"><i className="fas fa-fw fa-user-circle" /> &nbsp; My Account</Link>
                            <a className="dropdown-item" href="subscriptions.html"><i className="fas fa-fw fa-video" /> &nbsp; Subscriptions</a>
                            <a className="dropdown-item" href="settings.html"><i className="fas fa-fw fa-cog" /> &nbsp; Settings</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div id="wrapper">
                {/* Sidebar */}
                <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-fw fa-home" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/channels">
                            <i className="fas fa-fw fa-users" />
                            <span>Channels</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/singlechannel">
                            <i className="fas fa-fw fa-user-alt" />
                            <span>Single Channel</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/videopage">
                            <i className="fas fa-fw fa-video" />
                            <span>Video Page</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/uploadvideo">
                            <i className="fas fa-fw fa-cloud-upload-alt" />
                            <span>Upload Video</span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-folder" />
                            <span>Pages</span>
                        </a>
                        <div className="dropdown-menu">
                           <h6 className="dropdown-header">Login Screens:</h6>
                           <Link to="/login"> <a className="dropdown-item" href="login.html">Login</a></Link>
                            <Link className="dropdown-item" to="/register">Register</Link>
                            <Link className="dropdown-item" to="/frgtpass">Forgot Password</Link>
                            <div className="dropdown-divider" />
                            <h6 className="dropdown-header">Other Pages:</h6>
                            <Link className="dropdown-item" to="/error">404 Page</Link>
                            <Link className="dropdown-item" to='/blank'>Blank Page</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/historypage">
                            <i className="fas fa-fw fa-history" />
                            <span>History Page</span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-list-alt" />
                            <span>Categories</span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="categories.html">Movie</a>
                            <a className="dropdown-item" href="categories.html">Music</a>
                            <Link className="dropdown-item" to="/categories">Television</Link>
                        </div>
                    </li>
                    <li className="nav-item channel-sidebar-list">
                        <h6>SUBSCRIPTIONS</h6>
                        <ul>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt src="img/s1.png" /> Your Life
                                </a>
                            </li>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt src="img/s2.png" /> Unboxing  <span className="badge badge-warning">2</span>
                                </a>
                            </li>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt src="img/s3.png" /> Product / Service
                                </a>
                            </li>
                            <li>
                                <a href="subscriptions.html">
                                    <img className="img-fluid" alt src="img/s4.png" />  Gaming
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* /#wrapper */}
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
                {/* Logout Modal*/}
                <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )
}

export default Nav
