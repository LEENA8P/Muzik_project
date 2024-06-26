const TextWithHover = ({ displayText, active }) => {
    const textColor = active ? "text-white" : "text-gray-500";
  
    return (
      <div className="flex  cursor-pointer px-2">
        <div className={`text-sm font-bold ${textColor} hover:text-white`}>
          {displayText}
        </div>
      </div>
    );
  };
  
  export default TextWithHover;
  