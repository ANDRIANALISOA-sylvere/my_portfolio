import React from 'react';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center container mx-auto mt-2">
            <div>
                <span className="text-pink-500 font-bold text-6xl brand ms-5">JS</span>
            </div>
            <div>
                <ul className="flex justify-between md:gap-4 mr-3 font-medium">
                    <li className="mr-5 md:mr-0">
                        Home
                    </li>
                    <li className="mr-5 md:mr-0">
                        Skills
                    </li>
                    <li className="mr-5 md:mr-0">
                        Work
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;