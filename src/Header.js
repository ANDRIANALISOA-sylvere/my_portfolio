import React from "react";
import { FaDownload } from "react-icons/fa6";
import avatar from "./images/1716149903524.jfif";

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://josephin-sylvere.vercel.app/CV.pdf";
    link.download = "CV_Josephin_Sylvere.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto md:grid md:grid-cols-2 header">
      <div className="pt-32 text-left pl-5 md:col-span-1">
        <p className="text-pink-500 text-sm">Hello, my name is</p>
        <h1 className="nom text-4xl md:text-5xl font-medium prenom mb-5 md:mb-0">
          Joséphin Sylvère
        </h1>
        <h1 className="nom text-4xl md:text-5xl font-medium status">
          I am a Full Stack Developer.
        </h1>
        <br />
        <p className="text-sm opacity-70">
          I am a passionate full stack developer focused on web development.
          <br /> Currently, I am focusing on mastering TypeScript for even more
          versatility and skill.
        </p>
        <button
          onClick={handleDownload}
          className="mt-5 ring-2 hover:bg-pink-500 hover:ring-2 hover:ring-pink-500 ring-white px-4 py-2 outline-none transition ease-out duration-500 flex justify-around items-center gap-2"
        >
          <FaDownload />
          Download my CV
        </button>
      </div>
      <div
        className="flex justify-center items-center md:col-span-1"
        style={{
          width: "350px",
          height: "250px",
          marginTop: "180px",
          marginLeft: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={avatar}
          alt="Joséphin Sylvère's Avatar"
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
