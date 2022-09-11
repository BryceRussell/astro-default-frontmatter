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
            dirs: ['./'],
            frontmatter: { layout: "../layouts/DefaultLayout.astro" },
          },
          {
            dirs: ['./src/content'],
            frontmatter: { layout: "../layouts/DirectoryLayout.astro" },
          },
          {
            dirs: ['./src/content/2.md'],
            frontmatter: { layout: "../layouts/FileLayout.astro"  }
          },
        ],
      ],
    ],
  },
});
