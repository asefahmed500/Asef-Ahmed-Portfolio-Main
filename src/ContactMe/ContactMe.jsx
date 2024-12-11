import Swal from "sweetalert2";

/* eslint-disable react/no-unescaped-entities */
const ContactMe = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),

            message: formData.get('message'),
        };

        try {
            const response = await fetch('https://portfolio-backend-main-sb66.onrender.com/submitContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire("Message sent successfully!");
                event.target.reset(); // Reset the form after successful submission
            } else {
                Swal.fire("Failed to send message.");
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire("An error occurred while sending the message.");
        }
    };

    return (
        <div className="mt-10">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Get in Touch!</h1>
                        <p className="py-6 text-sm lg:text-base">
                            I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="your.email@example.com" className="input input-bordered" required />
                            </div>
                         
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name="message" placeholder="Write your message here..." className="textarea textarea-bordered" rows="4"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;


