

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading , subheading}) => {
    return (
        <div className="max-w-5xl mx-auto space-y-6 text-center">
            <h2 className="text-center text-4xl font-bold">{heading}</h2>
            <p className="text-center font-semibold">{subheading}</p>

            
        </div>
    );
};

export default SectionTitle;