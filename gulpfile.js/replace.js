const config = require('../gulp.config.json');
const { src, dest } = require('gulp');
const replace = require('gulp-replace');

// Cachebuster
function fingerprint() {
	var fpString = new Date().getTime();
	return src(config.path.fingerprint)
		.pipe(replace(/fp=\d+/g, 'fp=' + fpString))
		.pipe(dest(
			function(file) {
				return file.base;
			}
		));
}

exports.fingerprint = fingerprint;