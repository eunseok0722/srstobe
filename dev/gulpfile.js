const autoprefixer = require('autoprefixer');
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('node-sass'));
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const pcFocus = require('postcss-focus');
const pcFontpath = require('postcss-fontpath');
const stylelint = require('stylelint');
const extender = require('gulp-html-extend');
const ws = require('gulp-webserver');

gulp.task('extend', function () {
    return gulp.src('page_dev/**/*.html')
        .pipe(extender({annotations: false, verbose: false, root: "../"}))
        .pipe(plumber())
        .pipe(gulp.dest('../pages/'));
});


gulp.task('sass', function () {
    return gulp.src('css_dev/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(postcss(
            [pcFontpath({
                formats: [
                    {type: 'embedded-opentype', ext: 'eot'},
                    {type: 'woff2', ext: 'woff2'},
                    {type: 'woff', ext: 'woff'},
                    {type: 'truetype', ext: 'ttf'}
                ]
            })],
            //[autoprefixer({browsers: ['last 2 versions']})],
            [autoprefixer()],
            [pcFocus()]
        ))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('../assets/css'))
});

gulp.task('babel', function () {
    return gulp.src('js_dev/*.js')
        // .pipe(babel({
        // //     presets: ["@babel/preset-env"]
        //     presets: ["@babel/preset-env", "@babel/preset-react"]
        // }))
        .pipe(plumber())
        .pipe(gulp.dest('../assets/js/'));
});

gulp.task('webserver', function () {
    return gulp.src('../')
        .pipe(ws({
            livereload: true, open: true,
            directoryListing: {enable: true, path: '../'}
        }))
});

/* markup gulp setting */
gulp.task('extend-mrkp', function () {
    return gulp.src('markup_guide_dev/pages/*.html')
        .pipe(extender({annotations:false,verbose:false,root:"../"}))
        .pipe(plumber())
        .pipe(gulp.dest('../markup_guide/'));
});

gulp.task('babel-mrkp', function () {
    return gulp.src('markup_guide_dev/assets/js/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('../markup_guide/assets/js/'));
});

gulp.task('sass-mrkp', function() {
    return gulp.src('markup_guide_dev/assets/css/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
        .pipe(postcss(
            [pcFontpath({
                formats: [
                    {	type:'embedded-opentype', ext: 'eot' },
                    {	type: 'woff2', ext: 'woff2' },
                    {	type: 'woff', ext: 'woff' },
                    {	type: 'truetype', ext: 'ttf' }
                ]
            })],
            [autoprefixer()],
            [pcFocus()]
        ))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('../markup_guide/assets/css'))
});
/* //markup gulp setting */

gulp.task('watch', function () {
    gulp.watch('css_dev/**/*.scss', gulp.series('sass'));
    gulp.watch('page_dev/**/*.html', gulp.series('extend'));
    gulp.watch('page_include/**/*.html', gulp.series('extend'));
    gulp.watch('js_dev/*.js', gulp.series('babel'));

    //markup_guide_dev 폴더
    gulp.watch('markup_guide_dev/assets/css/**/*.scss', gulp.series('sass-mrkp'));
    gulp.watch('markup_guide_dev/**/*.html', gulp.series('extend-mrkp'));
    gulp.watch('markup_guide_dev/assets/js/*.js', gulp.series('babel-mrkp'));
});

gulp.task('default', gulp.parallel(['watch', 'webserver']));