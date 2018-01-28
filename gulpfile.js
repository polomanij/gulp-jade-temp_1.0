const gulp = require('gulp');
const jade = require('gulp-jade');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');

const conf = {
	src: './src',
	dist: './dist',
	html: {
		src: '/**/*.jade',
		includes: '/includes/*.jade'
	},
	css: {
		src: '/css/**/*.styl',
		dist: '/css',
		includes: '/css/**/_*.styl'
	}
};

gulp.task('buildHTML', function() {
	gulp.src(['!' + conf.src + conf.html.includes, conf.src + conf.html.src])
		.pipe(jade())
		.pipe(gulp.dest(conf.dist))
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task('buildCSS', function() {
	gulp.src(['!' + conf.src + conf.css.includes, conf.src + conf.css.src])
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(autoprefixer({
            browsers: ['> 2%'],
            cascade: false
        }))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(conf.dist + conf.css.dist))
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: conf.dist
        }
    });
});

gulp.task('watch', ['buildHTML', 'buildCSS', 'browser-sync'], function() {
	gulp.watch(conf.src + conf.html.src, ['buildHTML']);
	gulp.watch(conf.src + conf.css.src, ['buildCSS']);
})