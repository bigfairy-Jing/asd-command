const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();

const mainTs = async() => {
  await tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("js"))
}

const minify = async ()=> {
  await gulp.src('js/*.js')
    .pipe(plugins.ugifu())
    .pipe(plugins.rename({extname: '.min.js'}))
    .pipe(plugins.concat('main.min.js'))
    .pipe(gulp.dest('dist/js'))
}

const connect = async 
