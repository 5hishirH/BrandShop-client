import React, { useContext, useState } from "react";
import { useAuthContext } from "../AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const notify = (message) => toast.error(message);
  const navigation = useNavigate();

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
        Swal.fire({
          icon: "success",
          title: "Login Succesfull!"
        });
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
        navigation('/');
        Swal.fire({
          icon: "success",
          title: "Login Succesfull!"
        });
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
    <div className="w-11/12 mx-auto mt-20">
        <h2 className="text-4xl text-center">Please Login</h2>
      <div className="mt-8 w-full flex justify-center">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleLogin} className="">
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
              className="mt-4 input btn btn-success w-full max-w-xs cursor-pointer"
            />
          </form>
          <div className="flex gap-4 w-full">
            <span>Don't have an account?</span>
            <Link to={"/register"}>Register</Link>
          </div>
          <button onClick={handleSignInWithGoogle} className="w-full btn btn-neutral">
            Continue with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
