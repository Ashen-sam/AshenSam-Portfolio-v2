import { useTheme } from "./ThemeContext";
import { FaMoon, FaSun } from 'react-icons/fa';

const colorOptions = [
    { name: "red", color: "bg-red-600" },
    { name: "blue", color: "bg-blue-600" },
    { name: "orange", color: "bg-orange-500" },
];

export const ThemeSwitcher = () => {
    const { switchTheme, themeName, isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className="flex flex-col gap-4 my-6">
            {colorOptions.map(({ name, color }) => (
                <div
                    key={name}
                    onClick={() => switchTheme(name)}
                    className={`w-4 h-4 rounded-full cursor-pointer transition-transform transform hover:scale-110 ${color} ${themeName === name ? "ring-4 ring-gray-300 dark:ring-gray-600" : ""
                        }`}
                    title={name}
                />
            ))}

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="w-4 h-4 flex items-center justify-center cursor-pointer transition-transform transform hover:scale-110"
                title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
                {isDarkMode ? (
                    <FaSun className="text-yellow-400 text-xs" />
                ) : (
                    <FaMoon className="text-gray-600 dark:text-gray-400 text-xs" />
                )}
            </button>
        </div>
    );
};