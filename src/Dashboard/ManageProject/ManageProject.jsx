import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useToast from "../../Hooks/useToast";
import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ManageProject = () => {
  const [deleting, setDeleting] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { showToast, showConfirmationToast } = useToast();
  const navigate = useNavigate();

  const fetchProjects = async () => {
    const userEmail = "asefahmed500@gmail.com"; // Replace with dynamic email if needed

    try {
      const response = await axiosPublic.get(`/projects`, {
        params: { userEmail },
      });
      console.log(response.data); // Check the structure of the response
      return response.data;
    } catch (error) {
      throw new Error("Error fetching projects");
    }
  };

  const { data: projects, isLoading, isError, error, refetch } = useQuery(
    "projects",  // Unique query key
    fetchProjects,  // Query function
    { 
      refetchOnWindowFocus: false,  // Don't refetch when window is focused
      retry: 1  // Retry on failure
    }
  );

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(projects)) {
    return <div>Error: Projects data is not in the expected format</div>;
  }

  const handleDeleteProject = (project) => {
    showConfirmationToast("Are you sure you want to delete this project?", {
      onConfirm: async () => {
        setDeleting(true);
        try {
          const res = await axiosPublic.delete(`/projects/${project._id}`);
          if (res.status === 200) {
            refetch();
            showToast("Project has been deleted", { type: "success" });
          } else {
            showToast("Project could not be deleted", { type: "error" });
          }
        } catch (error) {
          console.error(error);
          const errorMsg = error.response
            ? error.response.data.message
            : "Error deleting project";
          showToast(`Error: ${errorMsg}`, { type: "error" });
        } finally {
          setDeleting(false);
        }
      },
      onCancel: () => {
        showToast("Deletion canceled", { type: "default" });
      },
    });
  };

  const handleUpdateProject = (project) => {
    navigate(`/dashboardasefahmed/updateproject/${project._id}`);
  };

  return (
    <div className="overflow-x-auto mx-auto max-w-8xl ml-80">
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>GitHub</th>
            <th>Live Link</th>
            <th>Client Link</th>
            <th>Server Link</th>
            <th>Created At</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <th>{index + 1}</th>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </td>
              <td>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              </td>
              <td>
                <a
                  href={project.client_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Link
                </a>
              </td>
              <td>
                <a
                  href={project.server_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Link
                </a>
              </td>
              <td>{new Date(project.createdAt).toLocaleDateString()}</td>
              <td>
                <button
                  onClick={() => handleDeleteProject(project)}
                  className="btn btn-ghost btn-xs"
                  disabled={deleting}
                >
                  <FaTrashAlt className="text-red-500" />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleUpdateProject(project)}
                  className="btn btn-ghost btn-xs"
                >
                  <FaEdit className="text-white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProject;
