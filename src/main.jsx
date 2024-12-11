import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import the necessary QueryClient components

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Provide the QueryClient here */}
      <div className='mx-auto'>
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
