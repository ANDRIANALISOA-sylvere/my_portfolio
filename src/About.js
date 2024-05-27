import React from "react";

const About = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-center">
        <h1 className="nom m-5 text-3xl  font-medium  border-b border-pink-500">
          À propos
        </h1>
      </div>
      <div className="md:grid grid-cols-2">
        <div className=" text-center md:text-right">
          <h1 className="nom text-xl md:text-3xl font-medium">
            Salut. Je suis Joséphin, <br /> ravi de vous accueillir sur mon portfolio. <br />{" "}
            Veuillez explorer à votre guise.
          </h1>
        </div>
        <div className="mt-5 md:mt-0 ms-2 md:ms-10 pr-1 md:ps-2 md:pr-32 text-center md:text-justify ">
          <h1>
            Passionné par le développement de solutions web innovantes, je m'efforce d'améliorer l'expérience utilisateur à travers des applications performantes et intuitives. Spécialisé en développement Full Stack, je collabore avec des startups ainsi que des grandes entreprises pour transformer leurs idées en réalité digitale. Imaginez les possibilités avec un développeur Full Stack dédié à votre projet.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
