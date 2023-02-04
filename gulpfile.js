// src 相当于 entry ｜ dest 相当于 output ｜ series 编排任务以前叫做task
const { src, dest, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
    // postcss 转化工具
const postcss = require('gulp-postcss')
    // 兼容性前缀
const autoprefixer = require('autoprefixer')
    // 代码压缩
const cssnano = require('cssnano')

function scss() {
    const plugins = [
        autoprefixer(),
        cssnano()
    ]

    return src('src/styles/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(dest('lib/styles'))
}

exports.default = series(scss)