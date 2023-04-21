import { useState } from "react";

const LoginInfo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function checkEmail() {
    !email ? setEmailError(true) : setEmailError(false);
  }
  function checkPassword() {
    !password ? setPasswordError(true) : setPasswordError(false);
  }

  function onSubmit() {
    checkEmail();
    checkPassword();
    if (!emailError && !passwordError) return true;
    else return false;
  }

  return (
    <div>
      <div>
        <div className="form">
          <div>
            <div>Email</div>
            <input type="Email" value={email} onChange={handleEmail}></input>
            {emailError && <p>Email cannot be empty.</p>}
          </div>
          <div>
            <div>
              <div>Password</div>
              <a href="./login"> Forgot password? </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
            ></input>
            {passwordError && <p>Password cannot be empty.</p>}
          </div>
          <button onClick={onSubmit}>Log in</button>
        </div>
      </div>
      <div>
        <p>{`Don't have an account?`}</p>
        <a href="./login"> Sign up </a>
      </div>
    </div>
  );
};

export default LoginInfo;
