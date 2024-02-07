/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./vendor/hup234design/filament-cms/**/*.php",
    ],
    theme: {
        extend: {
            colors: {
                eclipse: {
                    primary: '#DF5F1B',
                    secondary: '#E9930D',
                    blue: '#202E42',
                    yellow: '#F3C600',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
