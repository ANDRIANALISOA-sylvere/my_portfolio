import React from "react";
import html from "./images/2284975.webp";
import css from "./images/css-3.svg";
import js from "./images/js-logo-png-5.webp";
import tailwindcss from "./images/tailwind-css-logo-5AD4175897-seeklogo.com.webp";
import bootstrapIcone from "./images/bootstrap-5-logo-icon.svg";
import laravel from "./images/laravel-1.svg";
import reactIcone from "./images/react-2.svg";
import nodejs from "./images/nodejs-new-pantone-white.svg";
import express from "./images/Expressjs.webp";

function Tech() {
  return (
    <div className="mb-20">
      <div className="flex justify-center mt-32">
        <h1 className="nom m-5 text-3xl  font-medium  border-b border-pink-500">
          Tech
        </h1>
      </div>
      <div className="flex justify-around mt-5">
        <div className="tech">
          <img src={html} alt="" style={{ height: "30px" }} className="ms-8" />
          <br />
          <p className="badge">HTML</p>
        </div>
        <div className="tech">
          <img src={css} alt="" style={{ height: "30px" }} className="ms-6" />
          <br />
          <p className="badge">CSS</p>
        </div>
        <div className="tech">
          <img src={js} alt="" style={{ height: "30px" }} className="ms-14" />
          <br />
          <p className="badge">JAVASCRIPT</p>
        </div>
        <div className="tech">
          <img
            src={tailwindcss}
            alt=""
            style={{ height: "30px" }}
            className="ms-10"
          />
          <br />
          <p className="badge">TAILWIND</p>
        </div>
        <div className="tech">
          <img
            src={bootstrapIcone}
            alt=""
            style={{ height: "30px" }}
            className="ms-12"
          />
          <br />
          <p className="badge">BOOTSTRAP</p>
        </div>
        <div className="tech">
          <img
            src={reactIcone}
            alt=""
            style={{ height: "30px" }}
            className="ms-9"
          />
          <br />
          <p className="badge">REACT</p>
        </div>
        <div className="tech">
          <img
            src={laravel}
            alt=""
            style={{ height: "30px" }}
            className="ms-8"
          />
          <br />
          <p className="badge">LARAVEL</p>
        </div>
        <div className="tech">
          <img
            src={nodejs}
            alt=""
            style={{ height: "30px" }}
            className="ms-7"
          />
          <br />
          <p className="badge">NODEJS</p>
        </div>
      </div>
    </div>
  );
}

export default Tech;
