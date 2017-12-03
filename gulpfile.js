const gulp = require('gulp')
const sass = require('gulp-sass')
const sassLint = require('gulp-sass-lint')
const commentsToMd = require('gulp-comments-to-md')
const gulpConcat = require('gulp-concat')

gulp.task('[SASS] Compile', () => {
  return gulp.src('./src/sass-boilerplate.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
})

gulp.task('[SASS] Lint', () => {
  return gulp.src('dist/**/*.scss')
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('[Readme] Generate features', () => {
  return gulp.src('src/**/*.scss')
    .pipe(commentsToMd('features.md'))
    .pipe(gulp.dest('docs/'))
})

gulp.task('[Readme] Generate README.md', ['[Readme] Generate features'], () => {
  return gulp.src([
    './docs/readme.md',
    './docs/features.md'
  ])
  .pipe(gulpConcat('README.md'))
  .pipe(gulp.dest('./'))
})

gulp.task('docs', ['[Readme] Generate README.md'])

gulp.task('default', ['[SASS] Compile', '[SASS] Lint'])
