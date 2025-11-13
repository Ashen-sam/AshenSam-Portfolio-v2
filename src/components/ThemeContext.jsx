import { createContext, useContext, useState, useEffect } from "react";

// Define color themes
const themes = {
    red: {
        primary: "bg-red-500",
        secondary: "text-red-600",
        hover: "hover:bg-red-700",
    },
    blue: {
        primary: "bg-blue-500",
        secondary: "text-blue-600",
        hover: "hover:bg-blue-700",
    },
    orange: {
        primary: "bg-orange-400",
        secondary: "text-orange-500",
        hover: "hover:bg-orange-600",
    },
};

// Create context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
    // Read from localStorage first, fallback to "orange"
    const [themeName, setThemeName] = useState(() => {
        return localStorage.getItem("theme") || "orange";
    });

    // Save theme changes to localStorage
    useEffect(() => {
        localStorage.setItem("theme", themeName);
    }, [themeName]);

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
