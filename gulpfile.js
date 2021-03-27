const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

exports.default = function() {
  let plugins = [
    autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
    cssnano()
  ];
  return src('styles/*.css')
    .pipe(concat('index.min.css'))
    .pipe(postcss(plugins))
    .pipe(dest('dist/'));
}
