const gulp = require('gulp')
const sass = require('gulp-sass')
const sassLint = require('gulp-sass-lint')

gulp.task('[SASS] Compile', function () {
  return gulp.src('./src/sass-boilerplate.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
})

gulp.task('[SASS] Lint', function () {
  return gulp.src('dist/**/*.scss')
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('default', ['[SASS] Compile', '[SASS] Lint'])
