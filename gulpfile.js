var gulp = require('gulp'),
    mocha = require('gulp-mocha');

var testDirectory = [
    'tests/*.js'
];

gulp.task('test', () =>{
    return gulp.src(testDirectory, {read: false})
        .pipe(mocha({reporter: 'spec'}));
});