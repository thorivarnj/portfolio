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
				block_sm: '4px 4px #000'
			},
			backgroundImage: {
				custom_radial: 'radial-gradient(circle, rgba(34,206,106,1) 0%, rgba(232,233,235,1) 50%)'
			}
		}
	},
	plugins: []
}
