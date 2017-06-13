var gulp = require('gulp');
//var app = require('./express.js')
//解析sass流
var source = require('vinyl-source-stream');
//sass 编辑插件
var sass = require('gulp-sass');
// node 项目的重启
var nodemom = require('gulp-nodemon');
/*
    browserify 引用
*/
var browserify = require('browserify');

var less = require('gulp-less');



//文件目录
const filrPath = {
    'sass': './sass/*.scss',
    'js': [
        { 'name': 'controll', 'url': './staic/controller/*.js' },
        { 'name': 'directive', 'url': './staic/directive/*.js' }
    ]

}

gulp.task('less', function() {
    gulp.src('./node_modules/weui/src/style/weui.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
})
gulp.task('example', function() {
    gulp.src('./node_modules/weui/src/example/example.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
})


//合并js
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    filrPath.js.forEach(function(item, index) {
        gulp.src(item.url)
            .pipe(concat('all' + item.name + '.js'))
            .pipe(gulp.dest('./js'))
    })
});




//编辑com
gulp.task('browserify', function() {
    return browserify('js/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('js'));
});
//编译scss
gulp.task('sass', function() {
    return gulp.src('sass/index.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('css'));
})

//检测expree文件重启服务
gulp.task('sever', ['sass'], function() {
    return nodemom({
        'script': 'express.js',
        ignore: ["node_modules", "gulpfile"],
        env: {
            'NODE_ENV': 'development'
        }
    }).on('start', function() {
        console.log('启动成功')
    }).on('restart', function() {
        console.log('重启sever')
    })
})

gulp.task('watch', function() {
        gulp.watch('./sass/**/*.scss', ['sass'])
        gulp.watch('./staic/**/*.js', ['scripts'])
        gulp.watch('./js/app.js', ['browserify'])

    })
    //默认执行任务
gulp.task('dev', ['sever', 'less', 'example', 'browserify', 'sass', 'scripts', 'watch']);