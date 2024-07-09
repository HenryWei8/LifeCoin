/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#FFC800",
                secondary: "#6054ED",
                text: {
                    light: "#FFFFFF",
                    dim: "#96969C",
                    dark: "#6F6F7C",
                },
                bg: {
                    "very-dark": "#1A1A22",
                    dark: "#1E1E27",
                    dim: "#252733",
                    light: "#343442",
                },
            },
        },
    },
    plugins: [],
};
