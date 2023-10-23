import React from "react";

const Login = () => {
  return (
    <div>
      <form action="">
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
        <input type="submit" value="Login" className="input w-full max-w-xs cursor-pointer" />
      </form>
    </div>
  );
};

export default Login;
