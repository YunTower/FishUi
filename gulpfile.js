const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del').deleteAsync;

// 清理上次打包的文件
gulp.task('clean', function () {
  return del(['dist', 'lib', 'es']);
});

// 处理 CSS 文件
gulp.task('css', function () {
  return gulp.src([
    './packages/styles/**/*.css',
    './packages/components/**/*.css'
  ])
    .pipe(cleanCSS())
    .pipe(rename((path) => { path.dirname = '' }))
    .pipe(gulp.dest('dist'));
});

// 默认任务
gulp.task('default', gulp.series('clean', 'css'));