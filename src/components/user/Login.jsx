import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const {email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/");
    }
  };
  return (
    <div className="content-wrapper flex justify-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col bg-yellow-600 justify-center items-center w-80 mt-2 p-2 rounded-lg min-h-80"
      >
        <a href="/" className="text-2xl text-blue-900">
          Home
          <i className="fa-solid fa-house"></i>
        </a>
        
        <input
          className="bg-zinc-600 mt-2 rounded-lg h-12 p-2 w-full"
          name="email"
          value={formData?.email}
          onChange={onChangeHandler}
          type="email"
          placeholder="Enter you email"
        />
        <input
          className="bg-zinc-600 mt-2 rounded-lg h-12 p-2 w-full"
          name="password"
          value={formData?.password}
          onChange={onChangeHandler}
          type="password"
          placeholder="Enter you passsword"
        />

        <input
          className="bg-blue-600 mt-2 rounded-lg h-12 p-2 w-32 cursor-pointer"
          type="submit"
          value="Create Profile"
        />
      </form>
    </div>
  );
};

export default Login;
