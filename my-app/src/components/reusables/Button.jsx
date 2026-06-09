function Button({ text, className, icon, onClick}) {
    return (
        <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 ${className}`}
        >
            {text}

            {icon}
        </button>
    );
}

export default Button