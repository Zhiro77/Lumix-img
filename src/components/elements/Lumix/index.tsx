import React from "react";

const LumixButton: React.FC = () => {
    return (
        <button className="px-6 py-12 text-white w-full justify-center font-bold text-lg rounded-lg bg-gradient-to-r from-pink-400 to-fuchsia-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center space-x-2">
            <span className="text-3xl">Lumix</span>
            <span className="text-yellow-400 text-xl animate-pulse">✨</span>
        </button>
    );
};

export default LumixButton;
