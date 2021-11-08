import React,{useEffect} from 'react'

import { useHistory } from 'react-router-dom';

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
        <div>
            This is about page
        </div>
    )
}
