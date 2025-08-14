import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess()],
	kit: {
		prerender: {
			handleHttpError: 'warn'
		},
		adapter: adapter({ fallback: '404.html' }),
		paths: { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }
	},
	extensions: ['.svelte']
};

export default config;
