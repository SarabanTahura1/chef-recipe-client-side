import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthInfoProvider } from "../../Provider/AuthProvider";

const Login = () => {
  const { googleLogin, githubLogin, userLogin } = useContext(AuthInfoProvider);

  // handle creeate user
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login successfully");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto my-20">
      <div className="h-full">
        {/* Left column container with background*/}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          {/* Right column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            {/*Sign in section*/}
            <div className="flex flex-col items-center justify-center lg:justify-start">
              <p className="mb-0 mr-4 text-lg">Sign in with</p>
              <div className="flex justify-between items-center w-full my-2">
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
            <form onSubmit={handleUserLogin}>
              {/* Separator between social media sign in and email/password sign in */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
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
                    required
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
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Register button */}
              <div className="my-6">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p>
              New Member ?{" "}
              <Link to="/signup" className="btn-link">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
