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
    // Load theme from localStorage, default to orange
    const [themeName, setThemeName] = useState(() => {
        return localStorage.getItem("theme") || "orange";
    });

    // Detect system dark mode preference
    const getSystemDarkMode = () => {
        if (typeof window !== "undefined" && window.matchMedia) {
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    };

    // Load dark mode from localStorage, default to system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const stored = localStorage.getItem("darkMode");
        return stored !== null ? stored === "true" : getSystemDarkMode();
    });

    // Apply theme changes
    useEffect(() => {
        localStorage.setItem("theme", themeName);
    }, [themeName]);

    // Apply dark mode changes
    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const switchTheme = (name) => {
        if (themes[name]) setThemeName(name);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const value = {
        theme: themes[themeName],
        themeName,
        switchTheme,
        isDarkMode,
        toggleDarkMode,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook for easy use
export const useTheme = () => useContext(ThemeContext);
