/* eslint-disable react/prop-types */
const Project = ({ project }) => {
    const { name, live_link, image } = project;

    return (
        <div className="card glass w-full lg:w-auto">
            <figure>
                <img
                    src={image}
                    alt="Project"
                    className="object-cover w-full h-48 lg:h-60"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <a
                        href={live_link}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Link
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;