import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useToast from "../../Hooks/useToast";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
    const axiosPublic = useAxiosPublic();
    const { showToast } = useToast();
    const { id } = useParams(); // Assuming you're passing the project ID via the route

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Fetch existing project data and populate the form
    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axiosPublic.get(`/projects/${id}`);
                const project = response.data;

                // Set the fetched values in the form
                for (const key in project) {
                    setValue(key, project[key]);
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
                showToast("Failed to fetch project details.");
            }
        };

        fetchProjectDetails();
    }, [id, axiosPublic, setValue, showToast]);

    const onSubmit = async (data) => {
        try {
            const response = await axiosPublic.patch(`/projects/${id}`, data);
            showToast(response.data.message || "Project updated successfully!");
        } catch (error) {
            console.error("Error updating project:", error);
            showToast("Failed to update project. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-950 p-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-blue-950 mb-6">
                    Update Project
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Project Name */}
                    <div>
                        <label className="block font-semibold text-gray-700">Project Name</label>
                        <input
                            {...register("name", { required: "Project name is required" })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter the project name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* GitHub Link */}
                    <div>
                        <label className="block font-semibold text-gray-700">GitHub Link</label>
                        <input
                            {...register("github_link", {
                                required: "GitHub link is required",
                                pattern: {
                                    value: /^(http|https):\/\/[^ "]+$/,
                                    message: "Enter a valid URL",
                                },
                            })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter the GitHub repository link"
                        />
                        {errors.github_link && (
                            <p className="text-red-500 text-sm mt-1">{errors.github_link.message}</p>
                        )}
                    </div>

                    {/* Live Link */}
                    <div>
                        <label className="block font-semibold text-gray-700">Live Link</label>
                        <input
                            {...register("live_link", {
                                required: "Live link is required",
                                pattern: {
                                    value: /^(http|https):\/\/[^ "]+$/,
                                    message: "Enter a valid URL",
                                },
                            })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter the live project URL"
                        />
                        {errors.live_link && (
                            <p className="text-red-500 text-sm mt-1">{errors.live_link.message}</p>
                        )}
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block font-semibold text-gray-700">Image URL</label>
                        <input
                            {...register("image", {
                                required: "Image URL is required",
                                pattern: {
                                    value: /^(http|https):\/\/[^ "]+$/,
                                    message: "Enter a valid URL",
                                },
                            })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter the project image URL"
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-semibold text-gray-700">Description</label>
                        <textarea
                            {...register("description", {
                                required: "Description is required",
                            })}
                            className="textarea textarea-bordered w-full mt-1"
                            placeholder="Enter a brief description of the project"
                            rows="4"
                        ></textarea>
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    {/* Client Repo Link */}
                    <div>
                        <label className="block font-semibold text-gray-700">Client Repo Link</label>
                        <input
                            {...register("client_link", {
                                pattern: {
                                    value: /^(http|https):\/\/[^ "]+$/,
                                    message: "Enter a valid URL",
                                },
                            })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter the client repository URL (optional)"
                        />
                        {errors.client_link && (
                            <p className="text-red-500 text-sm mt-1">{errors.client_link.message}</p>
                        )}
                    </div>

                    {/* Server Repo Link */}
                    <div>
                        <label className="block font-semibold text-gray-700">Server Repo Link</label>
                        <input
                            {...register("server_link", {
                                pattern: {
                                    value: /^(http|https):\/\/[^ "]+$/,
                                    message: "Enter a valid URL",
                                },
                            })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter the server repository URL (optional)"
                        />
                        {errors.server_link && (
                            <p className="text-red-500 text-sm mt-1">{errors.server_link.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary w-full py-2 text-white bg-blue-950 hover:bg-blue-800"
                        >
                            Update Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProject;
