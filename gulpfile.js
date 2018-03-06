var gulp = require('gulp');

gulp.task('default', function() {
  console.log("Default task");
});

gulp.task('sayHello', function(){
  console.log("Hello");
});

gulp.task('calculations', function(){

  let x = 5;
  console.log("my lucky number is " + x);
});