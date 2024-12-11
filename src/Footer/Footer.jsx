import { FacebookOutlined, GithubOutlined, TwitterOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <div className="mt-10 rounded-s-2xl">
            <footer className="footer bg-gray-700 text-neutral-content p-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <aside className="text-center md:text-left">
                    <p>
                        Asef Ahmed - MERN Stack Developer
                        <br />
                        Crafting efficient and scalable web solutions.
                    </p>
                </aside>
                <nav className="text-center">
                    <h6 className="footer-title mb-2">Social</h6>
                    <div className="grid grid-flow-col gap-4 justify-center">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <TwitterOutlined className="text-xl text-white hover:text-blue-400" />
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <GithubOutlined className="text-xl text-white hover:text-gray-400" />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined className="text-xl text-white hover:text-blue-600" />
                        </a>
                    </div>
                </nav>
            </footer>
            <aside className="footer footer-center bg-base-300 text-base-content p-2">
                <p>Copyright © {new Date().getFullYear()} - All rights reserved - Asef Ahmed</p>
            </aside>
        </div>
    );
};

export default Footer;
