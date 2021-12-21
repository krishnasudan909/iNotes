import React, {useState} from 'react'
import { useHistory,Link } from 'react-router-dom'

export const SignUp = (props) => {

    const [credentials, setCredentials] = useState({fname:"", lname:"-", phno:"", email: "", password: "", cpassword:""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fName: credentials.fname, lName: credentials.lname, phoneNo:credentials.phno, email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
            props.showAlert("Account Created Successfully","success");
            history.push("/");

        }
        else{
            props.showAlert(json.error,"danger");
        }
    }


    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <>
        <div className='Signup'>
        <h2 className="text-center">Create New iNotes Account</h2>
        <div className="form-text text-center">We'll never share your credentials with anyone else.</div>
       
        <form onSubmit={handleSubmit}  className="container signup-form">
            <div className="row">
            <div className=" col-md-6 mb-2">
                <label htmlFor="fname" className="form-label"><b>First Name </b></label>
                <input type="text" name="fname" className="signup-input form-control" onChange={onChange } id="fname" required minLength={2} placeholder="min 2 characters" />
            </div>
            <div className=" col-md-6 mb-2">
                <label htmlFor="lname" className="form-label"><b>Last Name</b></label>
                <input type="text" name="lname" className="signup-input form-control" onChange={onChange } id="lname" placeholder="optional" />
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label"><b>Email</b></label>
                <input type="email" name="email" className="signup-input form-control" onChange={onChange } id="email" aria-describedby="emailHelp" required placeholder="valid email" />
            </div>
            <div className="col-md-6 mb-2">
                <label htmlFor="phno" className="form-label"><b>Phone Number </b></label>
                <input pattern="[6789][0-9]{9}" name="phno" className="signup-input form-control" onChange={onChange } id="phno" required minLength={10} maxLength={10} placeholder="min 10 digits" />
            </div>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label"><b>Password </b></label>
                <input type="password" name="password" className="signup-input form-control" onChange={onChange } id="password" placeholder="min 6 characters" required minLength={6} />
            </div>
            <div className="container text-center mt-2">
            <div className="row">
            <div className="col-md-12">
            <button type="submit" className="btn btn-outline-info my-3">SignUp</button>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <Link to="/login" className="mx-2 registered" >Already registered? Click here</Link>
            </div>
            </div>
            </div>
                
            
        </form>
        </div>
        </>
    )
}