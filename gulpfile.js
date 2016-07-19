var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var source = require("vinyl-source-stream");
var watch = require("gulp-watch");
var glob = require("glob");
var gutil = require("gulp-util");
var del = require("del");
var buffer = require('vinyl-buffer');
var colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});


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

/**
 * This Array contain all module name in your project
 */
const JS_BUNDLE = [
    {
        In: './src/js/Class/*.ts',
        Out: 'Class.js'
    },
    {
        In: './src/js/Function/*.ts',
        Out: 'Function.js'
    }
]

/**
 * This task used to compile a file *.ts into a file *.js (one by one)
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
gulp.task("js-dev", ['clean-up-js'], function () {
    return JS_BUNDLE.forEach(function (src) {
        var files = glob.sync(src.In)
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
            .pipe(source(src.Out))
            .pipe(gulp.dest(PATHS.DIST.JS));
    }, this);
});

/**
 * This task used to build js and minify it for Production
 */
gulp.task('js-prod', ['clean-up-js'], function () {
    return JS_BUNDLE.forEach(function (src) {
        var files = glob.sync(src.In)
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
            .pipe(source(src.Out))
            .pipe(buffer())
            .pipe(sourcemaps.init({ 'loadMaps': true }))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(PATHS.DIST.JS));
    }, this);
});

/**
 * Devare CSS
 */
gulp.task('stylus', ['clean-up-css'], function () {

});

/**
 * Devare Views
 */
gulp.task('copy-views', ['clean-up-view'], function () {

});
// -------------------- END BUILD ASSETS --------------------

/**
 * This task used to watch changes in  files *.ts , *.styl, *.html and start to re-build js, css , html
 */
gulp.task('watch', function () {
    gulp.watch(PATHS.SRC.JS, ['scripts']);
    gulp.watch(PATHS.SRC.CSS, ['stylus']);
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

//----------- Dev and Production ----------
gulp.task('dev', ['js-dev'], function () {
    gulp.start('watch');
    console.log("Watching changes.....".info)
});

gulp.task('prod', ['js-prod'], function () {
    console.log("Build production successfully....................".info);
});
//-----------End  Dev and Production ----------

