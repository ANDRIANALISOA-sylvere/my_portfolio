import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Contact() {
  return (
    <div className="mb-20">
      <div className="flex justify-center mt-32">
        <h1 className="nom m-5 text-3xl font-medium border-b border-pink-500">
          Contact
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5 md:mb-0">
          <div className="">
            <i>
              <MdEmail />
            </i>
          </div>
          <div className="">
            <a href="mailto:josephinsylvere@gmail.com" className="hover:text-pink-500">
              josephinsylvere@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5 md:mb-0">
          <div className="">
            <i>
              <AiFillLinkedin />
            </i>
          </div>
          <div className="">
            <a href="https://www.linkedin.com/in/josephin-sylvere" className="hover:text-pink-500">
              ANDRIANALISOA Joséphin Sylvère
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5 md:mb-0">
          <div className="">
            <i>
              <FaFacebook />
            </i>
          </div>
          <div className="">
            <a href="https://www.facebook.com/profile.php?id=100094686108117" className="hover:text-pink-500">
              ANDRIANALISOA Joséphin Sylvère
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="">
            <i>
              <AiFillGithub />
            </i>
          </div>
          <div className="">
            <a href="https://github.com/ANDRIANALISOA-sylvere" className="hover:text-pink-500">
              ANDRIANALISOA-sylvere
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="">
            <i>
              <AiOutlineTwitter />
            </i>
          </div>
          <div className="">
            <a href="https://x.com/sylverejosephin" className="hover:text-pink-500">
            @sylverejosephin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
