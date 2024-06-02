/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js'

    ],
    theme: {
        extend: {
            screens: {
                'xs': '320px',
                'sm': '425px',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
