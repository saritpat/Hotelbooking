/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: "#2D3DDF",
                hover_primary: "#5863dd",
            },
            screens: {
                sm: "391px",
                // => @media (min-width: 391px) { ... }
            },
        },
    },
    plugins: [],
};
