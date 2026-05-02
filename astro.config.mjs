// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Narcisal Blog',
			description: 'Hello, I am Narcisal. Currently studying CS in NCKU.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Narcisal' }],
			sidebar: [
				{
					label: '日記',
					autogenerate: { directory: 'diary' },
				},
			],
		}),
	],
});
