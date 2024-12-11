import { Helmet } from "react-helmet";

import Introduction from "../Introduction/Introduction";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asef</title>
            </Helmet>
            <Navbar />
            <div className="space-y-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Adjust spacing for smaller screens */}
                <section id="introduction" className="max-w-5xl mx-auto">
                    <Introduction />
                </section>
                <section id="skills" className="max-w-5xl mx-auto">
                    <Skills />
                </section>
                <section id="projects" className="max-w-5xl mx-auto">
                    <Projects />
                </section>
                <section id="contact" className="max-w-5xl mx-auto">
                    <ContactMe />
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
