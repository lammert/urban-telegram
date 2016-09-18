var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var minifyInline = require('gulp-minify-inline'); 
var strip = require('gulp-strip-comments');

gulp.task('default',['index','app','views'])

//minify index
gulp.task('index', function () {
    return gulp.src('index.html')
        .pipe(strip())
        .pipe(minifyInline())
        .pipe(gulp.dest('build'));
});

//vulcanize app 
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

//vulcanize views
gulp.task('views', function () {
    return gulp.src(['src/views/*.html'])
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
        .pipe(strip())
        .pipe(minifyInline())
        .pipe(gulp.dest('build/src/views'));
});
