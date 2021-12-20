import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import Alert  from './components/Alert';
import {Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Notes } from './components/Notes';
import {useState} from 'react';
import { UserDetails } from "./components/UserDetails";
import './App.css';
function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="MainContainer container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/notes">
                <Notes showAlert={showAlert} />
              </Route>
              <Route exact path="/userdetails">
                <UserDetails showAlert={showAlert} />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert}/>
              </Route>
              <Route exact path="/signup">
                <SignUp showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
