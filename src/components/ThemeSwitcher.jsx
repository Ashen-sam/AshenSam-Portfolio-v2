import { useTheme } from "./ThemeContext";

const colorOptions = [
    { name: "red", color: "bg-red-600" },
    { name: "blue", color: "bg-blue-600" },
    { name: "orange", color: "bg-orange-500" },
];

export const ThemeSwitcher = () => {
    const { switchTheme, themeName } = useTheme();

    return (
        <div className="flex flex-col gap-4 my-6">
            {colorOptions.map(({ name, color }) => (
                <div
                    key={name}
                    onClick={() => switchTheme(name)}
                    className={`w-4 h-4 rounded-full cursor-pointer transition-transform transform hover:scale-110 ${color} ${themeName === name ? "ring-4 ring-gray-300" : ""
                        }`}
                    title={name}
                />
            ))}
        </div>
    );
};
