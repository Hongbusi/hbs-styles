const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');

exports.default = function() {
  let plugins = [
    autoprefixer(),
    postcssImport(),
    cssnano()
  ];
  return src('src/index.css')
    .pipe(postcss(plugins))
    .pipe(dest('dist/'));
}
