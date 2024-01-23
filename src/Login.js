import React, {useState} from 'react'
import './Login.css'
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch();


    

const loginToApp = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userAuth = userCredential.user;

    dispatch(
      login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        profileUrl: userAuth.photoURL,
      })
    );
  } catch (error) {
    alert(error.message);
  }
};


    const register = async () => {
        if (!name) {
          return alert("Please enter a full name!");
        }
    
        try {
          const userAuth = await createUserWithEmailAndPassword(auth, email, password);
    
          await updateProfile(userAuth.user, {
            displayName: name,
            photoURL: profilePic,
          });
    
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: name,
            photoUrl: profilePic,
          }));
        } catch (error) {
          alert(error);
        }
      };
    

  return (
    <div className='login'>
       <img src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' alt=''/>

       <form>
        <input value={name} onChange={(e) => setName(e.target.value)}placeholder='Full name (required if registering)' type='text' />
        <input value={profilePic} onChange={(e) => setprofilePic(e.target.value)}placeholder='Profile pic URL (optional)' type='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
        <input value={password} onChange={(e) => setPassowrd(e.target.value)}placeholder='Password' type='password' />
        <button type='submit'onClick={loginToApp}>Sign In</button>
       </form>
       <p>Not a member?
        <span className='login_register' onClick={register}> Register Now</span>
       </p>
    </div>
  )
}

export default Login
