import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import setAuthToken from "../../utils/setAuthToken";
import { authActions } from "../../store/auth";
import { USER_LOGIN } from "../hooks/LoginAndRegister";
import { useLazyQuery } from "@apollo/client";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser /*, { loading, data, error, called }*/] = useLazyQuery(
    USER_LOGIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        username,
        password,
      },
      onCompleted: (data) => {
        return data;
      },
    }
  );

  const onSubmitForm = (e) => {
    e.preventDefault();
    loginUser().then((res) => {
      const data = res.data;
      const error = res.error;
      if (error) {
        alert("Username or password is incorrect");
      }
      if (data) {
        dispatch(
          authActions.authenticate({
            _id: data.loginUser._id,
            username: data.loginUser.username,
            token: data.loginUser.token,
            roleName: data.loginUser.userRole.name,
            authState: true,
          })
        );

        localStorage.setItem(
          "User",
          JSON.stringify({
            _id: data.loginUser._id,
            username: data.loginUser.username,
            token: data.loginUser.token,
            roleName: data.loginUser.userRole.name,
            authState: true,
          })
        );
        setAuthToken(data.loginUser.token);
        navigate("/home", { replace: true });
      }
    });
  };

  return (
    <>
    <div>
  {/* Breadcrumb Area start */}
  <section className="breadcrumb-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-hrading">Login / Register Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Login / Register</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* login area start */}
  <div className="login-register-area mb-60px mt-53px">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 mx-auto">
          <div className="login-register-wrapper">
            <div className="login-register-tab-list nav">
              <a className="active" data-bs-toggle="tab" href="#lg1">
                <h4>login</h4>
              </a>
              <a data-bs-toggle="tab" href="#lg2">
                <h4>register</h4>
              </a>
            </div>
            <div className="tab-content">
              <div id="lg1" className="tab-pane active">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form action="#" method="post">
                      <input type="text" name="user-name" placeholder="Username" />
                      <input type="password" name="user-password" placeholder="Password" />
                      <div className="button-box">
                        <div className="login-toggle-btn">
                          <input type="checkbox" />
                          <a className="flote-none" href="javascript:void(0)">Remember me</a>
                          <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit"><span>Login</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="lg2" className="tab-pane">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form action="#" method="post">
                      <input type="text" name="user-name" placeholder="Username" />
                      <input type="password" name="user-password" placeholder="Password" />
                      <input name="user-email" placeholder="Email" type="email" />
                      <div className="button-box">
                        <button type="submit"><span>Register</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* login area end */}
</div>

    </>
  );
};

export default Login;
