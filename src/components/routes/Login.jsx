import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formEntries, setFormEntries] = useState({
    email: "",
    password: "",
  });

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        formEntries.email,
        formEntries.password
      );
      localStorage.setItem("isLoggedIn", true);
      setVisible(true);
      toast(`Logged in.`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/");
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        toast("Invalid Credentials", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else if (err.code === "auth/user-not-found") {
        toast("Need to sign up first", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/signup");
      } else if (err.code === "auth/network-request-failed") {
        toast("Looks like you're disconnected", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        console.log(err.code);
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <h2 className="text-3xl font-bold underline text-center">Login</h2>
        <form
          className="flex flex-col items-center gap-3 my-3"
          onSubmit={loginSubmitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormEntries((prev) => ({ ...prev, email: e.target.value }))
            }
            required
            className="border-2 border-black text-2xl px-2 py-1"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormEntries((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            required
            className="border-2 border-black text-2xl px-2 py-1"
          />
          <button className="bg-white text-black focus:outline-none px-5 text-xl py-1 mt-3 rounded-md w-full">
            Login Now
          </button>
        </form>
        <div className="border w-full border-white rounded-full mb-2"></div>
        <p className="my-2 text-lg text-center">
          Don't have an account?
          <span
            className="underline cursor-pointer pl-1"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
