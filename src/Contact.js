import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Contact() {
  return (
    <div className="mb-20">
      <div className="flex justify-center mt-32">
        <h1 className="nom m-5 text-3xl  font-medium  border-b border-pink-500">
          Contact
        </h1>
      </div>
      <div className="flex justify-around mt-5">
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <i>
              <MdEmail />
            </i>
          </div>
          <div className="">
            <span>josephinsylvere@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <i>
              <AiFillLinkedin />
            </i>
          </div>
          <div className="">
            <span>ANDRIANALISOA Joséphin Sylvère</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <i>
              <FaFacebook />
            </i>
          </div>
          <div className="">
            <span>ANDRIANALISOA Joséphin Sylvère</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <i>
              <AiFillGithub />
            </i>
          </div>
          <div className="">
            <span>ANDRIANALISOA-sylvere</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
