import { defineConfig } from 'astro/config';
import { defaultFrontmatterAdvanced } from './plugin.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        defaultFrontmatterAdvanced,
        [
          //Option objects should be in order from less specific directories --> more specific directories to avoid wierd behavior
          //Ex: './' -> './src' -> './src/content' -> './src/content/1.md'
          {
            //Example of a global default frontmatter for all markdown
            dirs: ['./'],
            frontmatter: { layout: "../layouts/DefaultLayout.astro" },
          },
          {
            //Example of setting a default frontmatter for all markdown in direcotry
            dirs: ['./src/content'],
            frontmatter: { layout: "../layouts/DirectoryLayout.astro" },
          },
          {
            //Example of setting a files frontmatter
            dirs: ['./src/content/2.md'],
            frontmatter: { layout: "../layouts/FileLayout.astro"  }
          },
          {
            //Example of exluding a path from defaults
            dirs: ['./src/content/5.md'],
            frontmatter: {},
            replace: true
          }
        ],
      ],
    ],
  },
});
