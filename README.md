# Astro Remark Default Frontmatter

A simple prototype remark plugin for Astro that allows you to apply a default frontmatter to any file inside of a directory or list of directories

This is a demo mostly for personal use if I need to use it alot I will make a package and publish

## Options

Option objects should be in order from less specific directories --> more specific directories to avoid wierd behavior 

**Ex**: `'./src' -> './src/content' -> './src/content/1.md'`

**`dirs`**: 

**Type**: `Array<string>`

A list of directories that frontmatter will be applied to

**`frontmatter`**:

**Type**: `{}`

Frontmatter object that will be applied to all directories in `dirs`

**`replace`**:

**Type**: `boolean`

Replace the frontmatter entirely instead of spreading new values ontop of old values

### Example

**Option**:

```
[
  {
    dirs: ["./src/content"],
    frontmatter: {
      file: "none"
      dir: "content"
    }
  },
  {
    dirs: ["./src/content/1.md"],
    frontmatter: {
      file: "1"
    }
  },
  {
    dirs: ["./src/content/2.md"],
    frontmatter: {
      file: "2"
    },
    replace: true
  }
]
```

**Output**:

```
1.md frontmatter -> {
  file: "1"
}
2.md frontmatter -> {
  file: "2",
  dir: "content"
}
3.md frontmatter -> {
  file: "none",
  dir: "content"
}
4.md frontmatter -> {
  file: "none",
  dir: "content"
}
5.md frontmatter -> {
  file: "none",
  dir: "content"
}
```
