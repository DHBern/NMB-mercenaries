import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelteConfig from './svelte.config.js';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'baseLocale'],
			urlPatterns: [
				{
					pattern: `{${svelteConfig.kit.paths.base || ''}}?/:path(.*)?`,
					localized: [
						['de', `{${svelteConfig.kit.paths.base || ''}/}?de/:path(.*)?`],
						['fr', `{${svelteConfig.kit.paths.base || ''}/}?fr/:path(.*)?`]
					]
				}
			]
		})
	]
});
