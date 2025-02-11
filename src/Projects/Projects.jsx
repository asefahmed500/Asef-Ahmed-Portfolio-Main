import { useEffect, useState, useMemo } from "react";
import Project from "../Project/Project";
import SectionTitle from "../SectionTitle/SectionTitle";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const projectsPerPage = 6;

    // Replace with the actual user email
    const userEmail = "asefahmed500@gmail.com";

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://portfolio-backend-main-1.onrender.com/projects?userEmail=${userEmail}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError("Failed to fetch projects. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [userEmail]);

    const currentProjects = useMemo(() => {
        const indexOfLastProject = currentPage * projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - projectsPerPage;
        return projects.slice(indexOfFirstProject, indexOfLastProject);
    }, [currentPage, projects, projectsPerPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="space-y-10 px-4 sm:px-6 lg:px-8">
            <SectionTitle
                heading="Projects"
                subheading="Projects I have done so far"
            />

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((project) => (
                    <Project key={project._id} project={project} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <nav>
                    <ul className="pagination flex">
                        {Array.from(
                            { length: Math.ceil(projects.length / projectsPerPage) },
                            (_, index) => (
                                <li key={index} className="page-item">
                                    <button
                                        onClick={() => paginate(index + 1)}
                                        className={`page-link py-2 px-4 mx-1 rounded ${currentPage === index + 1
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-black"
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Projects;