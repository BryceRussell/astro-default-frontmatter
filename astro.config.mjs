import { defineConfig } from 'astro/config';
import { defaultFrontmatter } from './plugin.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [defaultFrontmatter, { simple: 'simple value' }],
  },
});
