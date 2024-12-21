import React from "react";
import Image from "next/image";

interface IconButtonProps {
    icon: string;
    text: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {
    return (
        <button className="flex items-center space-x-0.5 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-black font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
            <Image
                src={icon}
                alt={text}
                width={24}
                height={24}
            />
            <span>{text}</span>
        </button>
    );
};

export default IconButton;
