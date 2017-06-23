// Ideally, we'd point the import resolver to
// `node_modules/@zeal/react-scripts/config/webpack.config.dev.js` instead of
// having our own configuration here.  However, that doesn't currently work:
//
// - @zeal/react-scripts `lint` script loads `config/env.js`, which reads the
//   `.env` files and then transforms the NODE_PATH by removing any absolute
//   paths (to avoid accidentally importing files from outside the project)
//   and then resolving relative paths so that they become absolute.
//
// - `lint` spawns a call to `eslint` which ultimately loads
//   `webpack.config.dev.js`.  This new process inherits the massaged NODE_PATH
//   from above.
//
// - `webpack.config.dev.js` imports `config/env.js`.  Since this is now a
//   different process, that file is reloaded which.  It reloads our `.env`
//   file, but since dotenv ["will never modify any environment variables that
//   have already been set"](https://www.npmjs.com/package/dotenv#what-happens-to-environment-variables-that-were-already-set),
//   the now-absolute NODE_PATH entry gets removed during the NODE_PATH
//   transformation.
//
// - As a result, `eslint` can't properly resolve any of our module imports.
//

const paths = require("@zeal/react-scripts/config/paths");

module.exports = {
  extends: ["zeal", "zeal/react", "prettier", "prettier/react"],
  root: true,
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: [paths.ownNodeModules, paths.appNodeModules, paths.appSrc]
          }
        }
      }
    }
  }
};
