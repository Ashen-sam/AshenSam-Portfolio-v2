import { createContext, useContext, useState } from "react";

// Define color themes
const themes = {
    red: {
        primary: "bg-red-600",
        secondary: "text-red-600",
        hover: "hover:bg-red-700",
    },
    blue: {
        primary: "bg-blue-600",
        secondary: "text-blue-600",
        hover: "hover:bg-blue-700",
    },
    orange: {
        primary: "bg-orange-500",
        secondary: "text-orange-500",
        hover: "hover:bg-orange-600",
    },
};

// Create context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("orange"); // default theme

    const switchTheme = (name) => {
        if (themes[name]) setThemeName(name);
    };

    const value = {
        theme: themes[themeName],
        themeName,
        switchTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

// Custom hook for easy use
export const useTheme = () => useContext(ThemeContext);
