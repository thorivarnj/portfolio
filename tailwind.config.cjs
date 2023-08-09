/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    jit: true,
    theme: {
        extend: {
            fontFamily: {
                righteous: ['Righteous', 'sand-serif'],
                sans: ['Archivo', 'sans-serif']
            },
            colors: {
                onyx: '#313638',
                af_white: '#E8E9EB',
                emerald: '#22CE6A',
                xanthous: '#FFBA49',
                bright_pink: '#EF476F'
            },
            dropShadow: {
                block: '7px 7px #000',
                block_sm: '4px 4px #000',
            },
        }
    },
    plugins: []
};