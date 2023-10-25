import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useAuthContext } from "../AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const notify = (message) => toast.error(message);
  const { createUser, handleGoogleUser, auth, provider } = useAuthContext();

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value; // from name attribute of input:email
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      notify("Password must be of 6 characters atleast");
      return;
    } else if (!/[A-Z]/.test(password)) {
      notify("Must Contain atleast one capital letter");
      return;
    } else if (!/[\W_]/.test(password)) {
      notify("Must Contain atleast one special character");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // ...
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "For creating an account!",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "For creating an account!",
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        notify(errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
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
      <Link to={"/Login"}>Sign-in</Link>
      <button onClick={handleSignInWithGoogle} className="btn btn-neutral">
        Continue with Google
      </button>
      <ToastContainer />
    </div>
  );
};

export default Register;
