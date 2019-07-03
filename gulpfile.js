let gulp = require('gulp');
let less = require('gulp-less');
let del=require('del');
gulp.task('clean',function(done){
    del(['src/css/.css'],done());
});
gulp.task('less',function(done){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
});
gulp.task('watch',function(done){
    gulp.watch('src/less/*.less',gulp.series('less'));
    done();
});
gulp.task('start',gulp.series('clean','watch',gulp.parallel('less')),function(done){
    done();
});