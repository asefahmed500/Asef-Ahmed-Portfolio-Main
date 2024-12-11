import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen text-white">
            {/* Sidebar */}
            <div
                className={`fixed z-20 top-0 left-0 h-full  shadow-lg p-4 transition-transform transform lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:w-64 w-64 md:w-64 sm:w-64`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mt-10">
                    <h2 className="text-xl font-bold"> Dashboard Portfolio</h2>
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden"
                        aria-label="Close Sidebar"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                {/* Navigation Links */}
                <ul className="menu mt-8 space-y-4">
                    <li>
                        <NavLink
                            to="/dashboardasefahmed/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 px-4 rounded-md bg-blue-800 font-semibold"
                                    : "block py-2 px-4 rounded-md hover:bg-blue-800"
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboardasefahmed/addproject"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 px-4 rounded-md bg-blue-800 font-semibold"
                                    : "block py-2 px-4 rounded-md hover:bg-blue-800"
                            }
                        >
                            Add Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboardasefahmed/manageproject"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 px-4 rounded-md bg-blue-800 font-semibold"
                                    : "block py-2 px-4 rounded-md hover:bg-blue-800"
                            }
                        >
                            Manage Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboardasefahmed/viewmessgae"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 px-4 rounded-md bg-blue-800 font-semibold"
                                    : "block py-2 px-4 rounded-md hover:bg-blue-800"
                            }
                        >
                            View Message
                        </NavLink>
                    </li>
                </ul>
                <div className="divider my-6 border-t border-blue-700"></div>
                <ul className="menu space-y-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "block py-2 px-4 rounded-md bg-blue-800 font-semibold"
                                    : "block py-2 px-4 rounded-md hover:bg-blue-800"
                            }
                        >
                            View Portfolio
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-blue-950 p-6 overflow-y-auto">
                <button
                    onClick={toggleSidebar}
                    className="fixed z-30 top-4 left-4 bg-blue-900 text-white p-2 rounded-md lg:hidden"
                    aria-label="Open Sidebar"
                >
                    <FaBars size={24} />
                </button>
                <div className="mt-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
