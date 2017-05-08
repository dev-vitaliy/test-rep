 var gulp = require('gulp');
 var sass = require('gulp-sass');
 
 
 gulp.task('default', function(){
	 
	 gulp.watch('scss/*.scss', function(e){
		 gulp.src(e.path)
	         .pipe(sass())
		     .pipe(gulp.dest('css'))
	 })
	 
	  
 });