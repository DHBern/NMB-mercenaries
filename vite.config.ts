import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelteConfig from './svelte.config.js';

// Build an optional base-path group that keeps the leading "/" outside the group.
// When base is empty (app at server root) the group is omitted entirely, so the
// pattern stays absolute (e.g. "/:path(.*)?"). When base is set (e.g. "/dev") it
// becomes an optional group like "{dev/}?" matching both "/intro" and "/dev/intro".
const baseSegment = (svelteConfig.kit.paths.base || '').replace(/^\//, '');
const baseGroup = baseSegment ? `{${baseSegment}/}?` : '';

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
					pattern: `/${baseGroup}:path(.*)?`,
					localized: [
						['de', `/${baseGroup}de/:path(.*)?`],
						['fr', `/${baseGroup}fr/:path(.*)?`]
					]
				}
			]
		})
	]
});
