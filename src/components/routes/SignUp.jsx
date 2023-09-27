import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [signupEntries, setSignupEntries] = useState({
    email: "",
    password: "",
  });
  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        signupEntries.email,
        signupEntries.password
      );
      toast(`Logged in.`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast("Account already exists. Log in");
        navigate("/login");
      } else if (err.code === "auth/invalid-email") {
        toast("Enter valid email id");
      } else if (err.code === "auth/weak-password") {
        toast("Stronger password needed");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">

      <div className="flex justify-center p-5 pt-10 gap-10 items-center  ">
        <div className="w-[40vw] items-center justify-center flex rounded-full ">
          <img src="https://shorturl.at/aotX9" alt="SignUp Page" className=" h-fit w-full rounded-3xl" />
        </div>

        <div>
          <h2 className="text-4xl text-center font-bold mb-4 scale-150 rounded-lg  capitalize">Sign-Up</h2>
          <h1 className=" text-2xl font-semibold text-center mb-6 underline underline-offset-4 ">Fill your Details</h1>
          <form
            className="flex  flex-col items-center gap-3 my-3"
            onSubmit={signupSubmitHandler}
          >
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setSignupEntries((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="border-2 rounded-md border-black text-2xl px-2 py-1"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setSignupEntries((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              required
              className="border-2 rounded-md border-black text-2xl px-2 py-1"
            />
            <button className="bg-blue-500  text-black dark:text-darkorange  shadow-lg shadow-black  text-xl py-1 mt-3 rounded-md w-[80%]">
              Sign Up
            </button>
          </form>

          <div className="border w-full border-white rounded-full mb-2"></div>

          <p className="mb-2 mt-4 text-lg font-medium text-center ">
            Already have an account?
            <span
              className="underline cursor-pointer text-2xl text-red-500  pl-1"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
