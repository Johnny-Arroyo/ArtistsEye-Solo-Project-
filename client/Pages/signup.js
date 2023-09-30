import React from "react";

const SignUp = () => {
  return (
    <div className= 'logreg-box'>
    <div class="form-box register">
          <form action="#">
            <h2>Sign Up</h2>

            <div class="input-box">
              <span class="icon">
                <i class="bx bxs-user"></i>
              </span>
              <input type="text" required placeholder="Name"/>
            </div>
            <div class="input-box">
              <span class="icon">
                <i class="bx bxs-envelope"></i>
              </span>
              <input type="email" required placeholder="Email"/>
            </div>

            <div class="input-box">
              <span class="icon"> <i class="bx bxs-lock-alt"></i></span>
              <input type="password" required placeholder="Password"/>
            </div>

            <button type="submit" className="sUbtn">Sign Up</button>
          </form>
        </div>
      </div>
  )
}

export default SignUp;