// Plugins
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const images = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/style'))
}

function compresImages(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compresJavascript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(obfuscate())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*js', {ignoreInitial: false}, gulp.series(compresJavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compresImages));
}