var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
    var remotePath = '/';
    var conn = ftp.create({
        host: 'buff.elastictech.org',
        user: args.user,
        password: args.password,
        log: gutil.log
    });
    gulp.src([
        './**/*.*',
        '!./.*',
        '!./node_modules/**/*.*'
    ])
        .pipe(conn.newer(remotePath))
        .pipe(conn.dest(remotePath));
});