# Astro Default Frontmatter

This is a simple collection of remark plugins for Astro that allows you to define a default frontmatter for you markdown files


**Plugins**:

- [`defaultLayout`](#defaultlayout) define a default layout for ALL markdown
- [`defaultFrontmatter`](#defaultfrontmatter) define a default frontmatter for ALL markdown
- [`defaultFrontmatterAdvanced`](#defaultfrontmatteradvanced) define a default frontmatter based on the files directory in the project

If you want to see how these plugins work you can check out the [Stackblitz Demo](https://stackblitz.com/edit/github-hfgk3n)

## Install

`npm i astro-default-frontmatter`

## `defaultLayout`

**Option/Argument Type**: `string`

Define a default layout for ALL markdown in your project

### `Example`

```ts
//astro.config.mjs
import { defineConfig } from 'astro/config';
import { defaultLayout } from 'astro-default-frontmatter';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultLayout, "~/layouts/DefaultLayout.astro"]
    ]
  }
});
```

## `defaultFrontmatter`

**Option/Argument Type**: `Record<string, any>`

Define a default frontmatter for ALL markdown in your project

### `Example`

```ts
//astro.config.mjs
import { defineConfig } from 'astro/config';
import { defaultFrontmatter } from 'astro-default-frontmatter';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultFrontmatter, {
        layout: "~/layouts/DefaultLayout.astro",
        title: 'Default Title'
      }]
    ]
  }
});
```

## `defaultFrontmatterAdvanced`

**Option/Argument Type**:

```ts
Array<{
  dirs: string[];
  frontmatter: Record<string, unknown>;
  replace?: boolean;
}>
```
Define a default frontmatter based on what directory the file is in


Options should be in order from less specific dirs --> more specific dirs to stop frontmatters from overlapping  `'./' -> './src' -> './src/content' -> './src/content/1.md'`

### `dirs`

**Type**: `Array<string>`

A list of directories that frontmatter will be applied to

### `frontmatter`

**Type**: `Record<string, any>`

Frontmatter object that will be applied to all directories in `dirs`

### `replace`

**Type**: `boolean`

Replace the frontmatter entirely instead of spreading new values ontop of old values

### Examples

[Stackblitz Demo](https://stackblitz.com/edit/github-hfgk3n)

Or

```ts
//astro.config.mjs
import { defineConfig } from 'astro/config';
import { defaultFrontmatterAdvanced } from 'astro-default-frontmatter';

const Options = [
  {
    dirs: ['./'],
    frontmatter: { layout: "~/layouts/DefaultLayout.astro" },
  },
  {
    dirs: ['./src/content'],
    frontmatter: { layout: "~/layouts/DirectoryLayout.astro" },
  },
  {
    dirs: ['./src/content/2.md'],
    frontmatter: { layout: "~/layouts/FileLayout.astro"  }
  },
  {
    dirs: ['./src/content/5.md'],
    frontmatter: {},
    replace: true
  }
]

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultFrontmatterAdvanced, Options]
    ],
  },
});
```

**Output**:

```
1.md -> {
    "layout": "../layouts/FrontmatterLayout.astro",
    "title": "Title From File"
}
2.md -> {
    "layout": "../layouts/FileLayout.astro"
}
3.md -> {
    "layout": "../layouts/DirectoryLayout.astro"
}
4.md -> {
    "layout": "../layouts/DirectoryLayout.astro"
}
5.md -> {}
```
