import { useState } from "react";
import "./Login.scss";
import propTypes from 'prop-types';

Login.propTypes = {
  handleLogin: propTypes.func
};

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const check = () => {
    if (username === "admin" && password === "123456") {
      props.handleLogin(true);
    }
    else if (username === "" && password === "") {
      setError("Bạn chưa nhập tên tài khoản hoặc mật khẩu");
    }
    else {
      setError("Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại");
    }
  };
  const remove = () => {
    if (username === "" && password === "") {
      setError("");
    }
  }
  return (
    <div className="dialog">
      <div className="dialog__tittle" onClick={check}>Đăng Nhập</div>
      <div className="dialog__alert--error">{error}</div>
      <div>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onClick={remove}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Mật khẩu"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onClick={remove}
        />
      </div>
      <button onClick={check}>Đăng nhập</button>
      <a href="foo">Quên mật khẩu?</a>
      <div className="or">OR</div>
      <div className="btn_social">
        <div className="btn_social__facebook">Facebook</div>
        <div className="btn_social__google">Google</div>
      </div>
      <div className="trans_page">
        Bạn chưa có tài khoản?<a href="foo">Đăng ký</a>
      </div>
      <div className="admin">Username: admin, Password: 123456</div>
    </div>
  );
}

export default Login;