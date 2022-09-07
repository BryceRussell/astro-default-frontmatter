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
  //     replace: true //Replaces all previously set values
  //   }
  // ]
  return function (tree, file) {
    const filepath = file.history.pop().replace(file.cwd, '.');
    for (const option of options) {
      for (const dir of option.dirs) {
        filepath.startsWith(dir) && option.replace?
          file.data.astro.frontmatter = option.frontmatter:
          file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option.frontmatter};
      }
    }
  };
}
