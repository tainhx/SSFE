var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var tsify = require("tsify");
var source = require("vinyl-source-stream");
var watch = require("gulp-watch");
var glob = require("glob");
var gutil = require("gulp-util");
var del = require("del");

const PATHS = {
    SRC: {
        JS: ['src/js/**/*.ts'],
        View: ['src/view/**/*.html'],
        CSS: ['src/css/**/*.styl']
    },
    DIST: {
        JS: 'dist/js',
        VIEW: 'dist/view',
        CSS: ' dist/css'
    }
}

const JS_BUNDLE = [
    'Class',
    'Function'
]

/**
 * This task used to build a file *.ts to a file *.js
 */
gulp.task("test", function () {
    return gulp.src(PATHS.js)
        .pipe(ts({
            'compilerOptions': {
                "target": "es5",
                "module": "commonjs",
                "sourceMap": true,
                "pretty": true,
            }
        }))
        .pipe(gulp.dest(function (file) {
            return file.base.replace('src', 'dist');
        }));
});

// ----------------- BUILD ASSETS ---------------------
/**
 * This task used to bundle files in a folder into a file js named follow module
 */
gulp.task("scripts", ['clean-up-js'], function () {
    return JS_BUNDLE.forEach(function (src) {
        var files = glob.sync('./src/js/' + src + '/*.ts')
        return browserify({
            basedir: '.',
            debug: true,
            entries: files,
            cache: {},
            packageCache: {},
            sourceMap: true
        })
            .plugin(tsify)
            .bundle()
            .pipe(source(src + '.js'))
            .pipe(gulp.dest(PATHS.DIST.js));
    }, this);
});

gulp.task('stylus', ['clean-up-css'], function () {

});

gulp.task('copy-views', ['clean-up-view'], function () {

});
// -------------------- END BUILD ASSETS --------------------

/**
 * This task used to watch changes in  files *.ts , *.styl, *.html and start to re-build js, css , html
 */
gulp.task('watch', function () {
    gulp.watch(PATHS.SRC.JS, ['scripts']);
    gulp.watch(PATH.SRC.CSS, ['stylus']);
})

//--------- CLEAN UP -------------
gulp.task('clean-up', ['clean-up-js']);

gulp.task('clean-up-js', function () {
    return del('dist/js');
})

gulp.task('clean-up-css', function () {
    return del('dist/css');
})

//TODO : add more clean-up here....

//--------- END CLEAN UP ------------

gulp.task('default', ['scripts'], function () {
    gulp.start('watch');
});
