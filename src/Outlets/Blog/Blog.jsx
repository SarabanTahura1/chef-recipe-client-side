import React from "react";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="container mx-auto">
      <div className="my-20 px-4" ref={ref}>
        <div className="mb-10">
          {/* Question 01 */}
          <h2 className="text-2xl font-bold">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            A controlled component receives its current value and an update
            callback via props, and the parent component manages the state of
            the component. When the user interacts with the component, the
            parent component updates the state, which in turn updates the
            component's value.
          </p>
          <p>
            An uncontrolled component, maintains its own internal state, and
            when the user interacts with the component, it updates its own
            state, which in turn updates the component's value.
          </p>
        </div>
        {/* Question 02 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">
            Tell us the difference between nodejs and express js
          </h2>
          <p>
            Node.js is a platform for building the i/o applications which are
            server-side event-driven and made using JavaScript.
          </p>

          <p>
            Express.js is a framework based on Node.js which is used for
            building web-application using approaches and principles of Node.js
            event-driven architecture.
          </p>
        </div>
        {/* Question 03 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">
            How to validate React props using PropTypes?
          </h2>
          <ul>
            <li>
              {" "}
              Import the PropTypes library at the top of your component file.
            </li>
            <li>import PropTypes from 'prop-types'</li>
            <li>
              Create a propTypes object that defines the types of your props:
            </li>
            <li>Attach the propTypes object to your component:</li>
            <li>
              When a prop is passed to the component that does not match the
              specified type, a warning will be displayed in the console. That's
              it! By using PropTypes to validate your props, you can ensure that
              your components receive the correct data types and help catch
              potential errors early in the development process.
            </li>
          </ul>
        </div>
        {/* Question 04 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            Custom React JS hooks are reusable functions that a React JS
            software developer can use to add special and unique functionality
            to the React applications
          </p>

          <p>
            A custom hook does not require a specific signature. A software
            developer can choose what argument the custom hook has and what
            should the argument return. A custom hook always starts with the
            name ‘use’.
          </p>
        </div>
      </div>
      <div className="text-center mb-20">
        <ReactToPdf targetRef={ref} filename="blogs.pdf" scale={0.8}>
          {({ toPdf }) => (
            <button
              className="px-4 py-2 font-bold border-2 rounded-lg text-gray-700 border-gray-700 inline-block space-x-2"
              onClick={toPdf}
            >
              <FaDownload className="inline-block text-md" />
              <span> Generate to pdf</span>
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Blog;
