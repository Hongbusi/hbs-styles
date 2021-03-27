const { src, dest } = require('gulp');

exports.default = function() {
  return src('styles/*.css')
    .pipe(dest('dist/'));
}
