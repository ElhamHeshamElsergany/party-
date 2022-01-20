const gulp = require("gulp");
const { src, dest, watch, parallel, series } = require("gulp")

// html
const htmlmin = require('gulp-htmlmin');
function copyHtml(){
    return src ('index.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'))
}
exports.html = copyHtml
//css 
const css = require ('gulp-css')
function cssmin(){
    return src('style.css')
    .pipe(css())
    .pipe(gulp.dest('dist'));
}
exports.css = cssmin

//js 
const concat = require('gulp-concat');
const terser = require('gulp-terser');
function jsMinify() {
    return src('main.js',{sourcemaps:true}) 
        .pipe(concat('all.min.js'))
        .pipe(terser())
        .pipe(dest('dist',{sourcemaps:'.'}))
}
exports.js = jsMinify

// img 


const imagemin = require('gulp-imagemin');
function imgMinify() {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}
exports.img = imgMinify

//on browser

const  browserSync = require('browser-sync');
function serve (cb){
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
  cb()
}

function reloadTask(done) {
  browserSync.reload()
  done()
}
//watch
function watchTask() {
    watch('index.html',series(copyHtml, reloadTask))
    watch('main.js',series(jsMinify, reloadTask))
    watch('style.css', parallel(cssmin,reloadTask));
}
exports.default = series(parallel(jsMinify , cssmin , copyHtml), serve,watchTask)
