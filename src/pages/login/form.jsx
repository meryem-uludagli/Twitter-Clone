import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useFormik } from "formik";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ForgotPassword from "./forgot-password";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }, { resetForm }) => {
      if (isSignUp) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            sendEmailVerification(res.user);
            toast.info(
              "A verification email has been sent to your inbox, please check it."
            );

            setIsSignUp(false);
          })
          .catch((err) => toast.error("Error:" + err.code));
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("Your account has been created.");
            navigate("/feed");
          })
          .catch((err) => toast.error("Error:" + err.code));
      }
    },
  });
  return (
    <>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="input"
          onChange={formik.handleChange}
          value={formik.values.email}
          autoFocus
        />

        <label className="mt-5">Password</label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            className="input w-full"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span
            className="absolute end-3 text-black text-2xl  translate-y-[40%] cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {!isSignUp ? <ForgotPassword /> : <div className="h-[28px] w-1" />}

        <button
          type="submit"
          className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300"
        >
          {isSignUp ? "Sign up" : "Login"}
        </button>

        <p className="mt-5">
          <span className="text-gray-500">
            {isSignUp ? "If you have an account" : "Dont have an account"}
          </span>
          <span
            className="cursor-pointer ms-2 text-blue-500 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign up"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Form;
