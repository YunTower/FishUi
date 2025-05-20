const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del').deleteAsync;
const concat = require('gulp-concat');

// 清理上次打包的文件
gulp.task('clean', function () {
  return del(['dist']);
});

// 处理 CSS 文件
gulp.task('css', function () {
  // 先处理主题文件
  gulp.src('./packages/styles/theme.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));

  // 处理其他样式文件
  return gulp.src([
    './packages/styles/index.css',
    './packages/styles/remixicon.css',
    './packages/components/**/*.css'
  ])
    .pipe(cleanCSS())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist'));
});

// 默认任务
gulp.task('default', gulp.series('clean', 'css'));