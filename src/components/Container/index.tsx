import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-md mx-auto px-4 py-6 bg-white">
            {children}
        </div>
    );
}
