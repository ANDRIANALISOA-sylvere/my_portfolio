import React from 'react';

const About = () => {
    return (
        <div className="mb-5">
            <div className="flex justify-center">
                <h1 className="nom m-5 text-3xl  font-medium  border-b border-pink-500">About</h1>
            </div>
            <div className="md:grid grid-cols-2">
                <div className=" text-center md:text-right">
                    <h1 className="nom text-xl md:text-3xl font-medium">
                        Hi. I'm Josephin,  <br/> nice to meet  you. <br/> Please take a look around.
                    </h1>
                </div>
                <div className="mt-5 md:mt-0 ms-2 md:ms-10 pr-1 md:ps-2 md:pr-32 text-center md:text-justify ">
                    <h1>
                        I am passionate about building excellent software that improves the lives of those around me.
                        I specialize in creating software for clients ranging from individuals and small-business
                        all the way to large enterprise corporations.What would you do if you had a software expert available
                        at your fingertips?
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;