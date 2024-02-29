import React from 'react';
import { FaDownload } from "react-icons/fa6";


const Header = () => {
    return (
        <div className="text-center md:text-left md:grid md:grid-cols-4 header">
            <div></div>
            <div className="pt-32 col-span-3">
                <p className="text-pink-500 text-md">Hi, my name is</p>
                <h1 className="nom text-5xl md:text-6xl font-medium prenom mb-5 md:mb-0">Josephin Sylvere</h1>
                <h1 className="nom text-5xl md:text-6xl font-medium status">I'm a Full Stack Developer.</h1>
                <br/>
                <p className="text-md opacity-70">I'm a full stack developer specializing in building  exceptional
                    digital experiences. <br/> Currently, I'm focused on building responsive full-stack web applications.</p>
                <button className="mt-5 ring-2 hover:bg-pink-500 hover:ring-2 hover:ring-pink-500 ring-white px-4 py-2 outline-none transition ease-out duration-500 flex justify-around items-center gap-2"><FaDownload/>Download my resume</button>
            </div>
        </div>
    );
};

export default Header;