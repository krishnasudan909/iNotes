import React from "react";
import './EditProfile.css'
export const EditProfile = () => {

    const loadFile = (e)=> {
        let image = document.getElementById('output');
        image.src = URL.createObjectURL(e.target.files[0]);
    };
    let noProfileLink = "https://tinyurl.com/noProfileImage";

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
                    name="fname"
                    className="form-control"
                    id="fname"
                  />
                </div>
                <div className="mb-1 col-md-6">
                  <label htmlFor="lname" className="form-label">
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    id="lname"
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
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-1 col-md-6">
                  <label htmlFor="phno" className="form-label">
                    <b>Phone Number</b>
                  </label>
                  <input
                    type="number"
                    name="phno"
                    className="form-control"
                    id="phno"
                  />
                </div>
                <div className="mb-1 col-md-6">
                  <label htmlFor="password" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 info">
                  <p><b>*Firstname must be min of 2 characters*</b></p>
                  <p><b>*Password must be of min 6 characters*</b></p>
                  <p><b>*Email and Phno. must be valid*</b></p>
                  <p><b>*Lastname is optional*</b></p>
                </div>
              </div>

              <div className="container text-center my-2">
                <button type="submit" className="btn update">
                  <b>Update</b>
                </button>
              </div>
            </form>
          </div>
          
        <div className="col-md-6 text-center">
        <div className="row ">
        <div className="col-md-12  d-flex align-items-center justify-content-center" >
    <img id="output" src={noProfileLink} alt = "Profile Image" className="image" />
        </div>
                <div className="col-md-12">
                  <label htmlFor="file" className="form-label" >
                    <b>Profile Picture</b>
                  </label>
                  <br />
                  <input type="file" accept="image/*" name="image" id="file" onChange={loadFile} />
                </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};