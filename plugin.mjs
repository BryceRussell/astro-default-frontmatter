export function defaultLayout(layout) {
  return function (tree, file) {
    file.data.astro.frontmatter.layout = layout;
  }
}

export function defaultFrontmatter(option = {}) {
  return function (tree, file) {
    file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option};
  };
}

export function defaultFrontmatterAdvanced(options = []) {
  // [
  //   {
  //     dirs: ["./src/content"],
  //     frontmatter: {
  //       title: "Test Title
  //     },
  //     replace: true //Replaces the entire frontmatter instead of spreading new values onto old
  //   }
  // ]
  return function (tree, file) {
      const filepath = file.history.pop().replace(file.cwd, '.').replace(/\\/g, '/')
      for (const option of options) {
          for (const dir of option.dirs) {
              if (filepath.startsWith(dir)) {
                  if (option.replace) file.data.astro.frontmatter = option.frontmatter
                  else file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option.frontmatter}
              }
          }
      }
  };
}
