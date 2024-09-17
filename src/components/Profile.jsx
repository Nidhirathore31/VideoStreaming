import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';



const Profile = () => {

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
 <div className="card">
 {profileData?.profile_image ? 

 <img className='img' src={`http://157.66.191.24:3003/uploads/`+profileData?.profile_image?.filename} alt=""  /> : 
 <img className='img' src="img/user.png" alt=""  /> }
 <h2>{profileData?.username}</h2>
 <p className="title">{profileData?.email}</p>
 <p>{profileData?.gender}</p>
 
<form action="" onSubmit={SumbitProfile}>
<input type="file"
       onChange={(e)=>setImg(e.target.files[0])}
      
 /> <br />
 <button className='btn'>Submit</button>

</form>
 

 </div>
   </>
  )
}

export default Profile
