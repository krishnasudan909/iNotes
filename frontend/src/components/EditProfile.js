import React,{useEffect, useState} from "react";
import './EditProfile.css';
import {useHistory} from "react-router-dom";
export const EditProfile = (props) => {
  let history = useHistory();
    const host = "http://localhost:5000";

    const userInitial = {};
    const [user, setUser] = useState(userInitial);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [pic, setPic] = useState();
 
  const getUser = async () => {
    // API Call 
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() ;
    return setUser(json);
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  },[]);
  useEffect(() => {
    setFName(user.fName);
    setLName(user.lName);
    setEmail(user.email);
    setPhoneNo(user.phoneNo);
    setPic(user.pic);
    // eslint-disable-next-line
  },[history,user]);


  const onChangePic = (pics) => {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "iNotes");
      data.append("cloud_name", "krishna908");
      fetch("https://api.cloudinary.com/v1_1/krishna908/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          return setPic(data.url);
        })
        .catch((err) => {
          return console.log(err);
        });
  };

  const editUser = async () => {
    const response = await fetch(`${host}/api/auth/updateuser`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({fName,lName, phoneNo, email, password,pic})
    });

    const json = await response.json()
    console.log(json);
    if (json.success){
      props.showAlert("Profile Updated Successfully","success");
      window.location.href="http://localhost:3000/login";
      localStorage.removeItem('token');
      history.push("/login");
      window.location.reload();
    }

    else{
        props.showAlert(json.error,"danger");
    }
}
const deleteProfileImage=()=>{
  setPic("https://tinyurl.com/noProfileImage");
}


  return (
    <>
      <h2 className="text-center" style={{fontWeight:"bolder"}}>EDIT PROFILE</h2>
      <hr className="container" style={{ height: "3px", color: "black" }} />
      <div className="container">
        <div className="row d-flex flex-wrap-reverse" >
          <div className="col-md-6">
            <form className="container">
              <div className="row " >
                <div className="mb-1 col-md-6">
                  <label htmlFor="fname" className="form-label">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    name="fName"
                    className="form-control edit-input"
                    id="fname"
                    value={fName}
                    onChange={(e)=>setFName(e.target.value)}
                    required
                    minLength={2}
                  />
                </div>
                <div className="mb-1 col-md-6">
                  <label htmlFor="lname" className="form-label">
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    name="lName"
                    className="form-control edit-input"
                    id="lname"
                    value={lName}
                    onChange={(e)=>setLName(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-1 col-md-12">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control edit-input"
                    id="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-1 col-md-6">
                  <label htmlFor="phno" className="form-label ">
                    <b>Phone Number</b>
                  </label>
                  <input
                    pattern="[6789][0-9]{9}"
                    name="phoneNo"
                    className="form-control edit-input"
                    id="phno"
                    value={phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}
                    required
                    minLength={10}
                    maxLength={10}
                  />
                </div>
                <div className="mb-1 col-md-6">
                  <label htmlFor="password" className="form-label ">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control edit-input"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    minLength={6}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 info">
                  <p><b>*Firstname must be min of 2 characters*</b></p>
                  <p><b>*Email and Phno. must be valid*</b></p>
                  <p><b>*Password must be of min 6 characters*</b> <b style={{color:"blue"}}>( If filled )</b></p>
                  <p><b>*Lastname is optional*</b></p>
                </div>
              </div>

              <div className="container text-center my-2">
                <button type="submit" className="btn update" onClick={editUser}>
                  <b>Update</b>
                </button>
              </div>
            </form>
          </div>
          
        <div className="col-md-6 text-center">
        <div className="row ">
        <div className="col-md-12 d-flex align-items-center justify-content-center hoverThing" >
          <img  src={pic} alt = "..."className="profileImage" />
          <div className="middleOver">
          <i className="far fa-trash-alt fa-3x" style={{color:"red"}} onClick={deleteProfileImage}>
           </i><br></br>
          <b style={{color:"black"}}>Delete Profile Image</b>
          </div>
        </div>
                <div className="col-md-12">
                  <label htmlFor="file" className="form-label" >
                    <b>{`${fName} ${lName}`}</b>
                  </label>
                  <br />
                  <input type="file" accept="image/*" id="file" className="mt-2" onChange={(e)=>onChangePic(e.target.files[0])}
                    required />
                </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};