import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import process from 'node:process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
			handleMissingId: 'warn',
		},
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
	},
	runes: true,
};

export default config;
