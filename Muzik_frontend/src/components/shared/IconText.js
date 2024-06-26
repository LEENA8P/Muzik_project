import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
const IconText = ({iconName , displayText, active, targetLink, onClick})=>{
    const iconColor = active ? "white" : "gray";
  return (
    <Link to={targetLink} className="block" style={{ textDecoration: 'none' }}>
    <div className="flex items-center justify-start cursor-pointer  px-2"  onClick={onClick}>
        <div className=" text-xl px-3 py-1">
            <Icon icon= {iconName} 
                 style={{ color: iconColor }}
            />
        </div>
         <div className={`text-sm font-bold ${active ? "text-white" : "text-gray-500"} hover:text-white`}>
        {displayText}
      </div>
    </div> 
    </Link> 
  );

};

export default IconText;