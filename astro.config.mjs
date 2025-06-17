// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import customToc from "astro-custom-toc";

// https://astro.build/config
export default defineConfig({
	site: 'https://mag1cfrog.github.io',
	base: '/spark-tuning-notes/',
	output: 'static',
	integrations: [
		customToc(
			{
            maxDepth: 4, // Include headings up to level 4 (####)
        }
		), 
		mdx(), 
		sitemap()],
});
