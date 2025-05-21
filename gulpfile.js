import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import { deleteAsync } from 'del';
import concat from 'gulp-concat';

gulp.task('clean', function () {
  return deleteAsync(['dist']);
});

gulp.task('css', function () {
  gulp.src('./packages/styles/theme.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
  return gulp.src([
    './packages/styles/index.css',
    './packages/styles/remixicon.css',
    './packages/components/**/*.css'
  ])
    .pipe(cleanCSS())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('remove-css', function () {
  return deleteAsync(['es/style.css', 'lib/style.css']);
});

gulp.task('default', gulp.series('clean', 'css', 'remove-css'));
