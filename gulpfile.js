let gulp = require("gulp");
let ts = require("gulp-typescript");
let tsProject = ts.createProject('tsconfig.json');

gulp.task("default", function () {
    let tsResult = gulp.src("src/server/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("build"));
});