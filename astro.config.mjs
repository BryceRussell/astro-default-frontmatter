import { defineConfig } from 'astro/config';
import { dirFrontmatter } from './plugin.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        dirFrontmatter,
        [
          {
            dirs: ['./src/content'],
            frontmatter: { title: 'Default Title', default: "value" },
          },
          {
            dirs: ['./src/content/2.md'],
            frontmatter: { title: 'More Specific Default Title' }
          },
        ],
      ],
    ],
  },
});
