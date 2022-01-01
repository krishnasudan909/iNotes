import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/About.css';

export const About = () => {
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')){
            
        }
        else{
            history.push("/login");
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
        <div className='container '>
            <h2 className="text-center heading">About <b style={{color:"orange", textDecoration:"underline"}}>iNotes</b></h2>
            <hr className="container" style={{ height: "3px", color: "black" }} />
            <div className='row mb-4'>
                <div className='col-md-4 container d-flex justify-content-center'>
                    <div className='aboutImage'>
                    <b>iNotes</b>
                    </div>
                </div>
                <div className='col-md-8 container'>
                    <div className='aboutText'>
                        <p>• <strong>iNotes</strong> is a website where you will be able to keep all your notes secured and easily accessible, you can access your notes from <strong>Anywhere</strong> and <strong>Anytime</strong>. And, you can edit and delete them in one go.</p>
                        <p>
                            • Also, Your notes will not be in the local storage so they will be secure even if you reset your device.
                        </p>
                        <p>
                            • Feel secure with us because of end to end <strong>encryption</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 container text-center'>
                    <div className='anySuggestions'>
                    <p>Any Suggestions?</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 container text-center'>
                    <div className='anySuggestionsText'>
                    <p>Directly Contact With The Developers on <strong>linkedin</strong>. Link's Given Below</p>
                    </div>
                </div>
            </div>
            <div className='row container mt-3 mb-4'>
                <div className='col-md-4 mb-4 text-center'>
                    <div className='linkedinLinks'>
                    <a href="http://www.linkedin.com/in/krishna908" target="_blank" rel="noreferrer" >
                    <i className="fab fa-linkedin-in fa-2x"> </i>
                    </a>
                    
                    <br></br>
                    <a href="http://www.linkedin.com/in/krishna908" target="_blank" rel="noreferrer">
                    <b>Krishna Kumar</b>
                    </a>
                    </div>
                </div>
                <div className='col-md-4  mb-4 container text-center'>
                    <div className='linkedinLinks'>
                    <a href="http://www.linkedin.com/in/akshad" target="_blank" rel="noreferrer" >
                    <i className="fab fa-linkedin-in fa-2x"> </i>
                    </a>
                    
                    <br></br>
                    <a href="http://www.linkedin.com/in/akshad" target="_blank" rel="noreferrer">
                    <b>Akshad Modi</b>
                    </a>
                    </div>
                </div>
                <div className='col-md-4  mb-4 container text-center'>
                    <div className='linkedinLinks'>
                    <a href="https://www.linkedin.com/in/sanika-salunke-4019661b6" target="_blank" rel="noreferrer" >
                    <i className="fab fa-linkedin-in fa-2x"> </i>
                    </a>
                    
                    <br></br>
                    <a href="https://www.linkedin.com/in/sanika-salunke-4019661b6" target="_blank" rel="noreferrer" >
                    <b>Sanika Salunke</b>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
