import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // Default to light mode visually; will correct after mount
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false); // track if client mounted

    useEffect(() => {
        setMounted(true); // now we are on client
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || !storedTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (!mounted) return; // prevent errors on server
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    // Render button immediately; icons will match state after mount
    return (
        // <button
        //     onClick={toggleTheme}
        //     className={cn(
        //         "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        //         "focus:outline-hidden"
        //     )}
        // >
        //     {isDarkMode ? (
        //         <Sun className="h-6 w-6 text-yellow-300" />
        //     ) : (
        //         <Moon className="h-6 w-6 text-blue-900" />
        //     )}
        // </button>

        <></>
    );
};
