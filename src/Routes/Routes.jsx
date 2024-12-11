import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Profile from "../Dashboard/Profile/Profile";
import AddProject from "../Dashboard/AddProject/AddProject";
import ManageProject from "../Dashboard/ManageProject/ManageProject";
import UpdateProject from "../Dashboard/UpdateProject/UpdateProject";
import PrivateRoute from './../PrivateRoute/PrivateRoute';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    },
    {
        path: "/dashboardasefahmed",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "addproject",
                element: <AddProject></AddProject>
            },
            {
                path: "manageproject",
                element: <ManageProject></ManageProject>
            }
            ,

            {
                path: "updateproject/:id",
                element: <UpdateProject />,
                loader: async ({ params }) => {
                    try {
                        const response = await fetch(`https://portfolio-backend-main-1.onrender.com/projects/${params.id}`);
                        if (!response.ok) {
                            throw new Error(`Error: ${response.statusText} (HTTP ${response.status})`);
                        }
                        const project = await response.json();

                        if (!project) {
                            throw new Error("Project data is missing");
                        }

                        return project; // Ensure the project data is returned
                    } catch (error) {
                        console.error("Error loading project:", error);
                        throw new Response("Failed to load project", { status: 500 });
                    }
                },
            },


        ]
    },
]);
