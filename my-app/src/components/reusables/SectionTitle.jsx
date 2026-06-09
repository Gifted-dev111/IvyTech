

function SectionTitle({ label, title, highlight, description }) {
    return (
        <div className="space-y-4">
            <p className="uppercase tracking-[3px] text-sm text-blue-400">
                {label}
            </p>

     <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#0B132B]">
        {title}
        <span className="text-blue-500">{highlight}</span>
     </h2>

     <p className="text-gray-500 max-w-xl leading-7">
        {description}
     </p>
        </div>
    );
}

export default SectionTitle;