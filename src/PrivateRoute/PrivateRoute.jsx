import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useToast from '../Hooks/useToast';

const PrivateRoute = ({ children }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const { showToast } = useToast();

    useEffect(() => {
        // Check localStorage for existing authentication and timestamp
        const storedAuth = localStorage.getItem('isAuthenticated');
        const storedTimestamp = localStorage.getItem('authTimestamp');

        if (storedAuth && storedTimestamp) {
            const timeElapsed = Date.now() - parseInt(storedTimestamp, 10);
            const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds

            if (timeElapsed < thirtyMinutes) {
                setIsAuthenticated(true);
            } else {
                // Clear expired auth data
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('authTimestamp');
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validUsername = import.meta.env.VITE_validUsername;
        const validPassword = import.meta.env.VITE_validPassword;

        console.log('Valid Username:', validUsername, 'Valid Password:', validPassword);

        if (credentials.username === validUsername && credentials.password === validPassword) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('authTimestamp', Date.now().toString());
            showToast('Login successful!');
        } else {
            setError('Invalid credentials. Please try again.');
            showToast('Invalid credentials. Please try again.');
        }
    };

    if (isAuthenticated) {
        return children;
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Authentication Required</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={credentials.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={credentials.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
