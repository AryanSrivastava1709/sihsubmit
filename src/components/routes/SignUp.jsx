import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import toast from "react-hot-toast";
import online_test from "../../asset/clip_path_group.png";

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
    <div className="flex  items-center justify-center">
      <div className="flex items-center bg-headerColor/40 justify-start h-screen w-full">
        <div className="items-center justify-center flex w-full flex-col">
          <div className="">
            <p>ExamWarden</p>
          </div>

          <img
            src={online_test}
            alt="SignUp Page"
            className="flex h-[25rem] w-[25rem] mt-[10rem]"
          />
        </div>

        <div className=" bg-white h-full w-full overflow-hidden flex flex-col items-center justify-center">
          <h2 className="text-4xl text-center font-bold mb-4 scale-150 rounded-lg  capitalize">
            Sign-Up
          </h2>
          <h1 className=" text-2xl font-semibold text-center mb-6 underline underline-offset-4 ">
            Fill your Details
          </h1>
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
