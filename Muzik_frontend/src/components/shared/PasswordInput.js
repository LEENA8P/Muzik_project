const TextInput = ({label, placeholder, value, setValue}) =>{
    return( 
        <div className="textInputDiv d-flex flex-column w-100 mb-4">
            <label for={label} className="fw-semibold py-2">{label}</label>
            <input
                type="password"
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


// import { Icon } from '@iconify-icon/react';
// const IconText= ({iconName , displayText, active}) => {
//     return (
//         <div className="flex items-center justify-start">
//             <div className="p-5">
//                 <Icon icon = {iconName} color="white" fontSize={20}/>
//             </div>
//             <div className='text-white text-sm font-bold'>
//                 {displayText}
//             </div>
//         </div>
//     ) ;

// };



// export default IconText;