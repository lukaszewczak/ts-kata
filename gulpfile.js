var gulp = require('gulp');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('test', () => {
    var tsProject = ts.createProject('./tsconfig.json');

    return gulp.src('./test/**/*.ts', {base: '.'})
        .pipe(tsProject())
        .pipe(gulp.dest('.'))
        .pipe(mocha())
        .on('error', function (err) {
            console.log(err.stack);
        });
});

gulp.task('build', () => {
    var tsProject = ts.createProject('./tsconfig.json');

    return gulp.src('./src/**/*.ts', {base: '.'})
        .pipe(tsProject())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch(['src/**/*.ts', 'test/**/*.ts'], ['default']);
});
gulp.task('default', ['build', 'test']);