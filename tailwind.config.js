/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1e3a57", // Darker Blue for better contrast
                "accent": "#5d9b89",  // Slightly darker Green
                "background-light": "#F7F9FB",
                "background-dark": "#111827",
                "text-main": "#0f172a", // Slate 900 (Deep black-blue)
                "text-muted": "#334155", // Slate 700 (Much darker than previous gray)
            },
            fontFamily: {
                "display": ["Lexend", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}
