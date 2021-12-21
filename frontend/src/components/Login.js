import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import './LoginAndSignup.css';

export const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
            props.showAlert("Logged In Successfully","success");
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
        <h2 className="mt-4 text-center">Login With Existing Account</h2>
        <div className="form-text text-center">We'll never share your credentials with anyone else.</div>
            <form  onSubmit={handleSubmit} className="mt-3 login-form">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><b>Email</b></label>
                    <input type="email" className="form-control login-input" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input type="password" className="form-control login-input" value={credentials.password} onChange={onChange} name="password" minLength={6} placeholder="min 6 characters" id="password" />
                    
                </div>
                <div className="container text-center mt-2">
                <div className="row">
                <div className="col-md-12">
                <button type="submit" className="login-btn btn btn-lg my-3">Login</button>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                <Link to="/signup" className="mx-2 notregistered">Not registered? Click here</Link>
                </div>
                </div>
                </div>
                
                
            </form>
        </>
    )
}
