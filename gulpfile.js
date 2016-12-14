var gulp = require('gulp');
var watch = require('gulp-watch');
//var connect = require('gulp-connect');
//var open = require('gulp-open');
var concat = require('gulp-concat');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

// server start
gulp.task('live-server', function () {
    var server = new liveServer('server/main.js');
    server.start();
});

//complile JSX and bundle it for browserify(entry JSX) ->transform to reactify -> Java script(Output JS)
gulp.task('bundle',['move2temp'], function (){
    return browserify({
            entries: 'app/mount.jsx', //entry point 
            debug: true
        })
        .transform(reactify)
        .bundle()
        .on('error',console.error.bind(console))
        .pipe(source('app.js'))
        .pipe(gulp.dest('./temp'));
});

//apply theme on app.js that resides in temp
gulp.task('move2temp',function(){
        gulp.src('app/*.ejs')
        .pipe(gulp.dest('./temp'));
        gulp.src(['app/css/*.css'])
        .pipe(gulp.dest('./temp'));
        gulp.src(['bower_components/skeleton/css/*.css'])
        .pipe(gulp.dest('./temp'));
        gulp.src(['app/images/*'])
        .pipe(gulp.dest('./temp'));
    
});

gulp.task('bundle-n-reload',['bundle'],browserSync.reload)

gulp.task('observe-all',function(){
	gulp.watch('app/**/*.*',['bundle-n-reload']);
	gulp.watch('app/*.*',['move2temp']);
    gulp.watch('server/**/*.js',['bundle-n-reload','live-server']);
});

// combined master task + bundle(i.e. generate app.js) -> server start - >host
gulp.task('serve', ['live-server','bundle','move2temp','observe-all'], function (){
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
});
