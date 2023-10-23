import React, { useContext, useState } from "react";
import { useAuthContext } from "../AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = (message) => toast.error(message);

  const { signInUser, handleGoogleUser, auth, provider } = useAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value; // from name attribute of input:email
    const password = e.target.password.value;

    //signin
    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notify(errorMessage);
      });
  };

  const handleSignInWithGoogle = () => {
    handleGoogleUser()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <form>
        {/* email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* password */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="input w-full max-w-xs cursor-pointer"
        />
      </form>
      <button onClick={() => notify('Error')} className="btn">Notify</button>
      <ToastContainer />
    </div>
  );
};

export default Login;
