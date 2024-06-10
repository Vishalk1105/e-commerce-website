import React, { useState } from "react";
import ReactInput from "../components/ReactInput";
import ReactButton from "../components/ReactButton";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [invalidFieldErrorMsg, setInvalidFieldErrorError] = useState(false);
  const [emptyFieldErrorMsg, setEmptyFieldErrorMsg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "Post",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });
    if (userName.length === 0 || password.length === 0) {
      setEmptyFieldErrorMsg(true);
      navigate("/login");
    } else {
      const resp = await data.json();
      localStorage.setItem("token", resp.token);
      setPassWord("");
      setUserName("");
      navigate("/");
    }
    if (data.status === 400) {
      setInvalidFieldErrorError(true);
      navigate("/login");
    }
  };
  const onIconClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="logInLayoutDiv">
      <div className="loginFormDiv rounded shadow bg-body-tertiary p-3">
        <div className="loginHeader d-flex flex-column align-items-center my-3">
          <div className="fs-4 fw-bold mb-1">Welcome</div>
          <div className="logInLogo text-white rounded text-center align-middle bg-dark mt-1 fs-3">
            A
          </div>
        </div>
        <div className="">
          <ReactInput
            label="Username"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            error={
              emptyFieldErrorMsg
                ? "Both Fields can not be Empty"
                : invalidFieldErrorMsg
                ? "Invalid Credentials"
                : ""
            }
          />

          <ReactInput
            reactInputClassName="passwordInput mb-4"
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
            type={showPassword ? "password" : "text"}
            error={
              emptyFieldErrorMsg
                ? "Both Fields can not be Empty"
                : invalidFieldErrorMsg
                ? "Invalid Credentials"
                : ""
            }
            icon={true}
            iconClassName={
              showPassword
                ? "bi bi-eye-slash-fill passwordIcon"
                : "bi bi-eye-fill passwordIcon"
            }
            onIconClick={onIconClick}
          />
          <ReactButton
            btnType="submit"
            btnClass="btn-dark text-center w-100"
            onClickfn={onSubmit}
            btnText="Log In"
            reactBtnOuterDiv="mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
