import { defineConfig } from 'astro/config';

import { defaultLayout, defaultFrontmatter, defaultFrontmatterAdvanced } from 'astro-default-frontmatter';

const defaultFrontmatters = [
  //Option objects should be in order from less specific directories --> more specific directories to avoid wierd behavior
  //Ex: './' -> './src' -> './src/content' -> './src/content/1.md'
  {
    //Example of a global default frontmatter for all markdown
    dirs: ['./demo/'],
    frontmatter: { layout: "../layouts/DefaultLayout.astro" },
  },
  {
    //Example of setting a default frontmatter for all markdown in direcotry
    dirs: ['./demo/src/content'],
    frontmatter: { layout: "../layouts/DirectoryLayout.astro" },
  },
  {
    //Example of setting a files frontmatter
    dirs: ['./demo/src/content/2.md'],
    frontmatter: { layout: "../layouts/FileLayout.astro"  }
  },
  {
    //Example of exluding a path from defaults
    dirs: ['./demo/src/content/5.md'],
    frontmatter: {},
    replace: true
  }
]

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      // [defaultLayout, "./src/layouts/DefaultLayout.astro"]

      // [defaultFrontmatter, {
      //   layout: "./src/layouts/DefaultLayout.astro",
      //   title: 'Default Title'
      // }]

      [defaultFrontmatterAdvanced, defaultFrontmatters]
    ],
  },
});
