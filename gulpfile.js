var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var minifyInline = require('gulp-minify-inline'); 
var strip = require('gulp-strip-comments');

gulp.task('default',['index','app'])

//minify index
gulp.task('index', function () {
    return gulp.src('index.html')
        .pipe(strip())
        .pipe(minifyInline())
        .pipe(gulp.dest('build'));
});

//vulcanize app and views
gulp.task('app', function () {
    return gulp.src(['src/my-app.html','src/views/*.html'])
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
        .pipe(strip())
        .pipe(minifyInline())
        .pipe(gulp.dest('build/src'));
});

