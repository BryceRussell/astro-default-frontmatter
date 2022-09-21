import { VFile as BaseVFile, Data } from 'vfile';
import { Plugin } from 'unified';

type Vfile = BaseVFile & {
  data: Data & {
    astro: {
      frontmatter: Record<string, unknown>;
    };
  };
};

const defaultLayout: Plugin<[string], unknown> = (layout: string) => {
  return function (_: unknown, file: Vfile) {
    file.data.astro.frontmatter.layout = layout;
  };
};

const defaultFrontmatter: Plugin<[Record<string, unknown>], unknown> = (option = {}) => {
  return function (_: unknown, file: Vfile) {
    file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option};
  };
};

export interface Option {
  dirs: string[]; // Array of dirs your files are in Ex: './src/pages/blog'
  frontmatter: Record<string, unknown>; // The default frontmatter for the dirs defined in 'dirs'
  replace?: boolean; //Replaces the entire frontmatter instead of spreading new values onto old
};

const defaultFrontmatterAdvanced: Plugin<[Option[]], unknown> = (options = []) => {
  return function (_: unknown, file: Vfile) {
    const filepath = file.history.pop().replace(file.cwd, '.').replace(/(\/\/)|(\\)+/g, '/');
    for (const option of options) {
      for (const dir of option.dirs) {
        if (filepath.startsWith(dir)) {
          if (option.replace) file.data.astro.frontmatter = option.frontmatter
          else file.data.astro.frontmatter = {...file.data.astro.frontmatter, ...option.frontmatter}
        };
      };
    };
  };
};

export { defaultLayout, defaultFrontmatter, defaultFrontmatterAdvanced };