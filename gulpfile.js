const { src, dest, parallel, series } = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const tslint = require('gulp-tslint');
const rename = require('gulp-rename');
const { sync }= require('del');

/**
 * Delete the build and dist folders
 */
const clean = (cb) => {
    sync(['./dist']);
    cb();
}

/**
 * Transpile TypeScript into JavaScript
 */
const tsc = () => {
    return tsProject.src()
    .pipe(tsProject())
    .pipe(dest('./dist'))
}

/**
 * Lint TypeScript Files
 */
 const tsLint = () => {
    return tsProject.src()
    .pipe(tslint({ configuration: './tslint.json', formatter: 'stylish' }))
    .pipe(tslint.report({ emitError: true, reportLimit: 10, summarizeFailureOutput: true }));
 }

/**
 * Compile LESS files and copy them to the dist folder
 */
const less = () => {
    const less = require('gulp-less');
    const autoprefix = require('less-plugin-autoprefix');
    const concat = require('gulp-concat');

    return src('src/less/**/*.less')
        .pipe(less({
            plugins: [new autoprefix({ browsers: ['last 3 versions'] })]
        }))
        .pipe(concat('module.css'))
        .pipe(dest('./dist/sample/'));
}

/**
 * Lint LESS files
 */
const lessHint = () => {
    const lesshint = require('gulp-lesshint');
    return src('src/less/**/*less')
        .pipe(lesshint())
}

/**
 * Copy all HTML files to the dist/templates folder
 */
const copyTemplates = () => {
    return src('src/ts/**/*.html')
        .pipe(rename((path) => { path.dirname = path.dirname.replace('ts\\', '') }))
        .pipe(dest('./dist/sample/templates'));
}

const echoInstructions = (cb) => {
    console.log('Copy the sample directory in the dist directory to the dist/modules directory in your CampusNexus Student.')
    cb();
}

exports.clean = clean;
exports.less = series(lessHint, less);
exports.tsc = series(tsLint, tsc);
exports.lint = parallel(lessHint, tsLint);
exports.build = series(exports.clean, parallel(exports.tsc, exports.less, copyTemplates), echoInstructions);
exports.default = exports.build;