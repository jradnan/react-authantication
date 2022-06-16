import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebass/Firebass';
import img from '../src/image/logo.png'
import { useState } from 'react';


const auth = getAuth();
function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const handleClickSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      setUser(user)
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      setUser({});
    })
    .catch(error =>{
      setUser({});
    })
  }
  return (
    <div className="App">
      {
        user.email ?<button onClick={handleSignOut}>Sign Out</button>
        :
        <button  onClick={handleClickSignIn}>  Google Sign In</button>
      }
     
     <h1>Name: {user.displayName}</h1>
     <p>Email: {user.email}</p>
    </div>
  );
}

export default App;
