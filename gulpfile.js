//引入gulp
var gulp = require("gulp");
//引入sass
var sass = require("gulp-sass");


//添加copyHtml任务,保存到指定目录
gulp.task("copyHtml",function(){
	gulp.src("index.html").pipe(gulp.dest("D:/phpStudy/WWW/haveMe"));

});
//添加copyImg任务，保存到指定目录
gulp.task("copyImg",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:/phpStudy/WWW/haveMe/img"));

});
//copyJS任务，保存到指定目录
gulp.task("copyJs",function(){
	gulp.src("js/index.js").pipe(gulp.dest("D:/phpStudy/WWW/haveMe/js"));
});
//将转换成的css文件放到指定目录下
gulp.task("moveCss",function(){
	gulp.src("css/index.css").pipe(gulp.dest("D:/phpStudy/WWW/haveMe/css"));
});


//添加sass转换到css任务
gulp.task("sass",function(){
	gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"));
});



//添加自动监听任务功能
gulp.task("watch",function(){
	gulp.watch("index.html",["copyHtml"]);
	gulp.watch("img/**/*",["copyImg"]);
	gulp.watch("css/index.scss",["sass"]);
	gulp.watch("css/index.css",["moveCss"]);
	gulp.watch("js/index.js",["copyJs"]);
});
