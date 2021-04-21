const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    autoprefixer(),
    postcssImport(),
    cssnano()
  ]
}
