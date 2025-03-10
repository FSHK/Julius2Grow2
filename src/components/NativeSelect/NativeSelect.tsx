import {useState, useRef, useEffect} from "react";

interface NativeSelectProps {
    className?: string;
    placeHolderClassName?: string;
}

export default function NativeSelect({className = "", placeHolderClassName = ""}: NativeSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select an option");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle selection
    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    // Attach event listener for clicks outside
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative w-64 ${className}`} ref={dropdownRef}>
            {/* Select Box */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left cursor-pointer ${placeHolderClassName}`}>
                {selected}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md">
                    {["Option 1", "Option 2", "Option 3"].map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
