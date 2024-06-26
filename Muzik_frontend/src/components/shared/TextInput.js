const TextInput = ({ label, placeholder, className ,value, setValue , labelClassName }) => {
    return (
        <div className={`textInputDiv d-flex flex-column w-100 ${className}`}>
            <label htmlFor={label} className={`font-semibold ${labelClassName}`}>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-2 border border-black rounded"
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default TextInput;
