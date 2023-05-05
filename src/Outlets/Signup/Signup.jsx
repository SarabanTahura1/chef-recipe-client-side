import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthInfoProvider } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const {
    googleLogin,
    githubLogin,
    newAccountCreate,
    profileUpdate,
    userLogOut,
  } = useContext(AuthInfoProvider);
  const [errortext, setErrortext] = useState("");
  // handle creeate user
  const handleCreateUSer = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const url = form.url.value;
    setErrortext(" ");

    // if field Empty

    if (
      name.length === 0 ||
      email.length === 0 ||
      url.length === 0 ||
      password.length === 0
    ) {
      return setErrortext(
        "You can not Submit ! Please Fill the blanks input field"
      );
    }
    // password length checker
    if (password.length < 6) {
      return Swal.fire({
        title: "Error!",
        text: "Password must be 6 character long",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    newAccountCreate(email, password)
      .then((result) => {
        userLogOut();
        const user = result.user;

        profileUpdate(user, name, url)
          .then((result) => {})
          .catch((error) => {
            setErrortext(error.message);
          });

        Swal.fire({
          title: "success",
          text: "Account Create Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        setErrortext(error.code);
        setErrortext(error.message);
      });
    form.reset();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleCreateUSer}>
          {/* name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* photoURL field */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="photourl"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo URL
              </label>
            </div>
            <div className="mt-2">
              <input
                id="photourl"
                name="url"
                type="url"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* password field */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <span className="text-error">{errortext}</span>
          {/* Register button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
        <div className="flex justify-evenly items-center w-full my-2">
          <button
            onClick={googleLogin}
            className="duration-500 px-4 py-1 rounded-md hover:bg-green-700 hover:text-white text-semibold transition-colors  min-w-fit border-green-700 border-2 inline"
          >
            Google
          </button>
          <button
            onClick={githubLogin}
            className="duration-500 px-4 py-1 rounded-md hover:bg-green-700 hover:text-white text-semibold  transition-colors min-w-fit border-green-700 border-2 inline"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
