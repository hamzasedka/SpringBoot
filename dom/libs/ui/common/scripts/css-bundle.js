const { relative } = require('path');
const { Bundler } = require('scss-bundle');
const { writeFile } = require('fs');
try {
  _ = new Bundler().bundle('./libs/ui/common/src/lib/styles/main.scss', ['./libs/ui/common/src/lib/styles/**/*.scss']).then(
    ({ found, bundledContent, imports })=>{

      if (imports) {
        const cwd = process.cwd();

        const filesNotFound = imports
          .filter(x => !x.found)
          .map(x => relative(cwd, x.filePath));

        if (filesNotFound.length) {
          console.error(`SCSS imports failed \n\n${filesNotFound.join('\n - ')}\n`);
          throw new Error('One or more SCSS imports failed');
        }
      }

      if (found) {
        writeFile('./libs/ui/common/src/lib/styles/_bundle.scss', bundledContent, undefined, (x)=>{
          console.log('./libs/ui/common/src/lib/styles/_bundle.scss Generated ');
        });
      }
    }
  );
} catch (error) {
  console.error(error);
}
