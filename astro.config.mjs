// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mag1cfrog.github.io',
	base: '/spark-tuning-notes/',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
