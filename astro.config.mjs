import { defineConfig } from 'astro/config';
import { defaultFrontmatterAdvanced } from './plugin.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        defaultFrontmatterAdvanced,
        [
          {
            dirs: ['./src/content'],
            frontmatter: { title: 'Less Specific Default Title', layout: "../layouts/default.astro" },
          },
          {
            dirs: ['./src/content/2.md'],
            frontmatter: { title: 'More Specific Default Title', layout: "../layouts/post2.astro"  }
          },
        ],
      ],
    ],
  },
});
