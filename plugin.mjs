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
          console.log(filepath)
          for (const dir of option.dirs) {
              console.log(dir)
              if (filepath.startsWith(dir)) {
                  if (option.replace) file.data.astro.frontmatter = option.frontmatter
                  else file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option.frontmatter}
              }
          }
      }
  };
}
