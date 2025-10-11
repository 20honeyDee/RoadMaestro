import React from 'react'

interface TextFieldProps {
    label: string;
    type: string;
    // className: React.ReactNode;
};

const TextField: React.FC<TextFieldProps> = ({ label, type }) => {
    return(
        <div className='block m-2'>
            <label className='font-montserrat'>{label}</label>
            <input 
                className='border rounded w-full p-1 font-poppins'
                type={type}
            />
        </div>
    );
};

export default TextField;
