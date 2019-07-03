let gulp = require('gulp');
let less = require('gulp-less');
let del = require('del');
// 清除旧文件
gulp.task('clean', function (done) {
    del(['src/css/.css'], done());
});
// 编译less
gulp.task('less', function (done) {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
    done();
});
// 监听less文件变化
gulp.task('watch', function (done) {
    gulp.watch('src/less/*.less', gulp.series('less'));
});
// 启动
gulp.task('start', gulp.series('clean', gulp.parallel('less', 'watch')), function (done) {
    done();
});