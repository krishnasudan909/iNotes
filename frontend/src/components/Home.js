import React,{useEffect} from 'react'
import { AddNote } from './AddNote'
import { useHistory } from 'react-router-dom';


export const Home = (props) => {

    const {showAlert}  = props;
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
            <AddNote showAlert={showAlert}/>
        </div>
    )
}
