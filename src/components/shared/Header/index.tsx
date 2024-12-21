import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import StarIcon from "@/components/elements/icons/Star";

type HeaderProps = {
    username: string;
    profileImage: string;
    points: number;
};

const Header: React.FC<HeaderProps> = ({ username, profileImage, points }) => {
    return (
        <header className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
                    <Avatar.Image
                        src={profileImage}
                        alt={`${username}'s profile`}
                        className="w-full h-full object-cover"
                    />
                    <Avatar.Fallback className="bg-gray-200 flex items-center justify-center w-full h-full text-gray-500">
                        {username.charAt(0).toUpperCase()}
                    </Avatar.Fallback>
                </Avatar.Root>
                <span className="text-lg font-medium">@{username}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-md shadow-sm">
                <span className="text-purple-500 text-sm font-semibold">+</span>
                <span className="text-gray-800 font-bold">{points}</span>
                <StarIcon width={20} height={20} />
            </div>
        </header>
    );
};

export default Header;
