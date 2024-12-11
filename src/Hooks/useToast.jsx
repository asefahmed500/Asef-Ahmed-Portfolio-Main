import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
    const showToast = (message, options = {}) => {
        toast(message, {
            position: "top-center",  // Position of the toast
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            ...options, // Allow customization for specific toasts
        });
    };

    const showConfirmationToast = (message, { onConfirm, onCancel }) => {
        const confirmButton = <button onClick={onConfirm} className="btn btn-success">Yes</button>;
        const cancelButton = <button onClick={onCancel} className="btn btn-danger">No</button>;

        toast(
            <div>
                <p>{message}</p>
                <div className="flex justify-between">
                    {confirmButton}
                    {cancelButton}
                </div>
            </div>,
            {
                position: "top-center",
                autoClose: false, // Keep the toast open until the user interacts
                closeOnClick: false,
                hideProgressBar: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                transition: Bounce,
            }
        );
    };

    return { showToast, showConfirmationToast };
};

export default useToast;
