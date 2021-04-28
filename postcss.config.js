const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const less = require('postcss-less');

module.exports = {
  plugins: [
    autoprefixer(),
    postcssImport(),
    cssnano()
  ],
  // syntax: 'postcss-less'
}
