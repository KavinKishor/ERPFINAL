import { useState } from "react";
import axios from "axios";
import { registerUser } from "../URL/url";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  let handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(registerUser, { name, email, password })
      .then((res) => {
        toast.success("You are registered successfully");
        toast.warning("You have to login for access");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-center vh-100 page-login">
        <div className="p-3 rounded log-form" style={{ width: "40%" }}>
          <h2 className="mb-3 ">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="exampleInputname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <p className="container my-2">Already have an account ?</p>
          <Link to="/" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
