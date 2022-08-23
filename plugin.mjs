export function dirFrontmatter(options={}) {
  // [
  //   {
  //     dirs: ["./src/content"],
  //     frontmatter: {
  //       title: "Test Title
  //     },
  //     spread: true //Spread values instead of fully replacing them
  //   }
  // ]
  return function (tree, file) {
    let filepath = file.history.pop().replace(file.cwd, '.')
    for (let i in options) {
      let option = options[i]
      for (let j in option.dirs) {
        if (filepath.startsWith(option.dirs[j])) {
          option.spread?
            file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option.frontmatter}:
            file.data.astro.frontmatter = option.frontmatter
        }
      }
    }
  }
}