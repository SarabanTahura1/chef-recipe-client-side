import React from "react";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="container mx-auto">
      <div className="my-20" ref={ref}>
        <div className="mb-10">
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
