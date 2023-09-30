import React from "react";

const SignIn = () => {
  return (
  <div className="logreg-box">
    <div className="form-box login">
      <form action="#">
        
        <h2>Sign In</h2>
          
          <div className="input-box">
            <span className="icon">
              <i class="bx bxs-envelope"></i>
            </span>
            <input type="email" required placeholder="Email"/>
          </div>

          <div className="input-box">
            <span className="icon"> <i className="bx bxs-lock-alt"></i></span>
              <input type="password" required placeholder="Password"/>
          </div>

          <button type="submit" className="sIBtn">Sign In</button>

          </form>
        </div>
    </div>
  );
}

export default SignIn;