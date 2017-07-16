// VAR
var 	autoprefixer	= require('autoprefixer'),
		browserSync		= require('browser-sync'),
		cssnano			= require('cssnano'),
		gulp			= require('gulp'),
		gutil			= require('gulp-util'),
		sass			= require('gulp-sass'),
		sourcemaps		= require('gulp-sourcemaps'),
		size			= require('gulp-size'),
		postcss			= require('gulp-postcss'),
		wait			= require('gulp-wait'),
		rename			= require('gulp-rename'),
		svgSprite		= require('gulp-svg-sprite'),
		cssnext			= require('postcss-cssnext'),
		precss			= require('precss'),
		ftp				= require('vinyl-ftp'),
		minimist		= require('minimist');

var args = minimist(process.argv.slice(2));


// =============================================================================
// Errors Handler
// =============================================================================

var err = {
	errorHandler: function (error) {
		gutil.log('Error: ' + error.message);
		gutil.beep();
		this.emit('end');
	}
}

// =============================================================================
// SASS to CSS
// =============================================================================

gulp.task('sass', function() {
	gulp.src('www/sass/**/*.scss')
		.pipe( wait(100) )
		.pipe( sass() )
		.pipe( gulp.dest('www/css/') );
});

// =============================================================================
// CSS Enhancement
// =============================================================================

gulp.task('css', function () {
	var plugins = [
		//precss(),
		autoprefixer({browsers: ['last 2 version']}),
		cssnano()
	];

	return gulp.src('www/css/style.css')
		.pipe( sourcemaps.init() )
		.pipe( postcss(plugins) )
		.pipe( rename({suffix: '.min', prefix : ''}) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest('www/css') )
		.pipe( browserSync.reload({stream: true}) );
});

// =============================================================================
// SVG Sprite
// =============================================================================

gulp.task('sprite', function () {
	return gulp.src('www/img/svg/*.svg')
		.pipe( svgSprite({
			shape: {
				spacing: {
					padding: 0
				}
			},
			mode: {
				css: {
					dest: "img/",
					layout: "diagonal",
					sprite: '../sprite.svg',
					bust: false,
					render: {
						scss: {
							dest: "../../../www/sass/partials/_sprite-svg.scss",
							template: "www/sass/tpl/_sprite-tpl-css.scss"
						}
					}
				},

				symbol: {
					dest: "img/",
					layout: "diagonal",
					sprite: '../sprite-inline.svg',
					bust: false,
					render: {
						scss: {
							dest: "../../../www/sass/partials/_sprite-svg-inline.scss",
							template: "www/sass/tpl/_sprite-tpl-inline.scss"
						}
					}
				}
			},
			variables: {
				mapname: "icons"
			}
		}))
		.pipe(gulp.dest('www/img/'));
});

// =============================================================================
// BrowserSync
// =============================================================================

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "www/"
		},
		notify: false
	});
});


// =============================================================================
// Deploy
// =============================================================================

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

// =============================================================================
// Watcher
// =============================================================================

gulp.task('watch', ['sass', 'css', 'browser-sync'], function() {
	gulp.watch('www/img/sprite.svg');
	gulp.watch('www/**/*.scss', ['sass']);
	gulp.watch('www/css/style.css', ['css']);
	gulp.watch('www/img/svg/*.svg', ['sprite']);
	gulp.watch('www/js/*.js', browserSync.reload);
	gulp.watch('www/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);