/* eslint-disable react/no-unescaped-entities */
import asefimg from '../assets/portasef.png';
import { Typewriter } from 'react-simple-typewriter';
import './Introduction.css'; // Import the CSS file
import asefcv from "../assets/Asef Ahmed.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Introduction = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 p-4 sm:p-6 lg:p-10 items-center">
            {/* Left section - Text */}
            <div className="space-y-6 lg:space-y-10 mt-10 lg:mt-20 text-center lg:text-left">
                <p className="text-base sm:text-lg font-extrabold lg:text-2xl text-gradient">
                    <Typewriter
                        words={[
                            'Hello, I am Asef Ahmed, a passionate MERN stack developer with a knack for building dynamic, user-centric web applications.',
                            'With a strong foundation in MongoDB, Express, React, and Node.js, I enjoy transforming ideas into scalable and efficient digital solutions.',
                            'My journey in web development is fueled by a love for problem-solving and a commitment to continuous learning.',
                            'Whether it is crafting responsive front-end interfaces or architecting robust back-end systems, I thrive on creating seamless experiences that connect technology with real-world needs.'
                        ]}
                        loop={true}
                        cursor
                        cursorStyle=""
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>

                <p className="text-sm sm:text-base lg:text-lg font-bold">
                    Welcome to my portfolio, let's build something amazing together!
                </p>

                <a href={asefcv} className="btn btn-primary inline-flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <AiOutlineDownload />
                    <span>Download Resume</span>
                </a>
            </div>

            {/* Right section - Image */}
            <div className="flex justify-center lg:justify-end">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96 rounded-full ring ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <img src={asefimg} alt="Asef Ahmed" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
