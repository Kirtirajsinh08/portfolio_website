import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Get theme from localStorage immediately to avoid flicker
const storedTheme =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

// If no theme is stored, default to dark
if (typeof window !== 'undefined') {
    if (storedTheme === 'dark' || !storedTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        storedTheme === 'dark' || !storedTheme
    );

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300 cursor-pointer',
                'focus:outline-hidden'
            )}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300' />
            ) : (
                <Moon className='h-6 w-6 text-blue-300' />
            )}
        </button>
    );
};
