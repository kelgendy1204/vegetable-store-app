'use strict';

const fs = require('fs');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');
const shortcss = require('postcss-short');
const pump = require('pump');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pngquant = require('imagemin-pngquant');
const jpegtran = require('imagemin-jpegtran');
const svgo = require('imagemin-svgo');
const gifsicle = require('imagemin-gifsicle');
const merge = require('merge-stream');
const rename = require('gulp-rename');
const gulpSequence = require('gulp-sequence');
const eslint = require('gulp-eslint');
const sassLint = require('gulp-sass-lint');
const envify = require('envify');
const clean = require('gulp-clean');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const newer = require('gulp-newer');
const notifier = require('node-notifier');
const dotenv = require('dotenv');

var gls = require('gulp-live-server');
gulp.task('serve', function() {

  //2. serve at custom port
  var server = gls.static('./', 3000);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['./public/**/*.*', '!./public/**/*.map', './index.html'], function (file) {
    server.notify.apply(server, [file]);
  });

});

const mainSrcFolder = './src/';
const mainDestFolder = './public/';

dotenv.config();

const notify = (title, message) => {
    notifier.notify({ title, message });
};

const pagesArr = ['app'];

(function() {

    let postCssPlugins = [
        cssnext({
            browsers: ['last 10 version', '> 1%']
        })
    ];

    for (let i = 0; i < pagesArr.length; i++) {
        let page = pagesArr[i];

        let b = browserify({
            entries: [`${mainSrcFolder}js/index.js`],
            debug: true,
            cache: {},
            packageCache: {},
            plugin: [watchify]
        });
        b.transform(babelify, { 'compact': false });
        b.transform(envify);

        let bundle = function () {
            return b.bundle()
                .on('error', swallowError)
                .pipe(source(`${page}.js`))
                .pipe(buffer())
                .pipe(gulp.dest(`${mainDestFolder}js/`))
                .on('error', swallowError);
        };

        gulp.task(`js:dev:${page}`, bundle);
        b.on('update', bundle);
        b.on('log', function (msg) {
            gutil.log(gutil.colors.yellow(msg));
        });

        gulp.task(`css:dev:${page}`, () => {
            return gulp.src(`${mainSrcFolder}sass/style.scss`)
                .pipe(sourcemaps.init())
                .pipe(sass({ outputStyle: 'compressed' }).on('error', swallowError))
                .pipe(postcss(postCssPlugins))
                .pipe(rename(`${page}.css`))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(`${mainDestFolder}css`));
        });

        gulp.task(`watch:${page}`, () => {
            gulp.watch(`${mainSrcFolder}sass/**/*.scss`, [`css:dev:${page}`]);
            gulp.watch(`${mainSrcFolder}sass/**/*.scss`, (vinyle) => {
                lintSass(vinyle.path);
            });

            gulp.watch(`${mainSrcFolder}js/**/*.js`, (vinyle) => {
                lintFile(vinyle.path);
            });
        });

        gulp.task(`${page}`, [`css:dev:${page}`, `js:dev:${page}`, `watch:${page}`]);
    }
}());

// gulp.task('global', ['watch:global']);

// gulp.task('watch:global', () => {

//  gulp.watch(`${mainSrcFolder}pages/global/**/*.scss`, pagesArr.map(function(page) {
//      return `css:dev:${page}`;
//  }));
//  gulp.watch(`${mainSrcFolder}pages/global/**/*.scss`, (vinyle) => {
//      lintSass(vinyle.path);
//  });

//  gulp.watch(`${mainSrcFolder}pages/global/js/**/*.js`, (vinyle) => {
//      lintFile(vinyle.path);
//  });

// });

function lintFile(file) {
    return gulp.src(file)
        .pipe(eslint({
            configFile: './.eslintrc.json'
        }))
        .pipe(eslint.format());
}

gulp.task('lint', ['lintjs', 'lintscss']);

gulp.task('lintjs', () => {
    return gulp.src([`${mainSrcFolder}js/**/*.js`])
        .pipe(eslint({
            configFile: './.eslintrc.json'
        }))
        .pipe(eslint.format());
});

gulp.task('lintscss', () => {
    return gulp.src(`${mainSrcFolder}sass/**/*.scss`)
        .pipe(sassLint({
            options: {
                formatter: 'stylish',
                'merge-default-rules': false
            },
            rules: {
                'no-ids': 0,
                'no-mergeable-selectors': 0,
                'trailing-semicolon': 2,
                'quotes': [
                    1,
                    {
                        'style': 'single'
                    }
                ]
            }
        }))
        .pipe(sassLint.format());
});

function lintSass(file) {
    return gulp.src(file)
        .pipe(sassLint({
            options: {
                formatter: 'stylish',
                'merge-default-rules': false
            },
            rules: {
                'no-ids': 0,
                'no-mergeable-selectors': 0,
                'trailing-semicolon': 2,
                'quotes': [
                    1,
                    {
                        'style': 'single'
                    }
                ]
            }
        }))
        .pipe(sassLint.format());
}

gulp.task('clean', function() {
    return gulp.src(`${mainDestFolder}`, { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('css', () => {

    let postCssPlugins = [
        cssnext({
            browsers: ['last 15 version', '> 1%']
        }),
        shortcss(),
        mqpacker(),
        cssnano({
            autoprefixer: false,
            discardComments: {
                removeAll: true
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            zindex: false
        })
    ];

    let stream = merge();
    for (let i = 0; i < pagesArr.length; i++) {
        let page = pagesArr[i];
        let task = gulp.src(`${mainSrcFolder}sass/style.scss`)
            .pipe(sass({ outputStyle: 'compressed' }).on('error', swallowError))
            .pipe(postcss(postCssPlugins))
            .pipe(rename(`${page}.css`))
            .pipe(gulp.dest(`${mainDestFolder}css`));

        stream.add(task);

        if (i == pagesArr.length - 1) {
            return stream;
        }
    }
});

gulp.task('js', () => {
    let stream = merge();
    for (let i = 0; i < pagesArr.length; i++) {
        let page = pagesArr[i];
        let task = browserify(`${mainSrcFolder}js/main.js`)
            .transform(babelify, { 'compact': false })
            .bundle()
            .on('error', swallowError)
            .pipe(source(`${page}.js`))
            .pipe(buffer())
            .pipe(gulp.dest(`${mainDestFolder}js/`));
        stream.add(task);
        if (i == pagesArr.length - 1) {
            return stream;
        }
    }
});

function minifyImages() {
    return gulp.src(`${mainSrcFolder}images/**/*.{jpg,png,svg,gif,ico}`)
        .on('error', swallowError)
        .pipe(newer(`${mainDestFolder}images`))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant(), jpegtran(), svgo(), gifsicle()]
        }))
        .pipe(gulp.dest(`${mainDestFolder}images`));
}

gulp.task('imagemin', () => {
    minifyImages();
});

gulp.task('watch:imagemin', () => {
    watch(`${mainSrcFolder}images/**/*`, {events: ['add', 'change'] }, function () {
        minifyImages();
    });
});

gulp.task('compress', function(cb) {
    pump([
        gulp.src(`${mainDestFolder}js/**/*.js`),
        uglify({ mangle: true }),
        gulp.dest(`${mainDestFolder}js/`)
    ],
        cb
    );
});

gulp.task('copyFonts', () => {
    return gulp.src([`${mainSrcFolder}fonts/**/*`])
        .pipe(gulp.dest(`${mainDestFolder}fonts`));
});

gulp.task('watch:copyFonts', () => {
    gulp.watch(`${mainSrcFolder}fonts/**/*`, ['copyFonts']);
});

gulp.task('copyUncompiledScripts', () => {
    return gulp.src([`${mainSrcFolder}uncompiled/**/*.js`])
        .pipe(gulp.dest(`${mainDestFolder}js`));
});

gulp.task('watch:copyUncompiledScripts', () => {
    gulp.watch(`${mainSrcFolder}uncompiled/**/*.js`, ['copyUncompiledScripts']);
});

gulp.task('handleimages', ['imagemin', 'watch:imagemin']);

gulp.task('handleviews', ['copyviews', 'watch:copyviews']);

gulp.task('copyfiles', ['copyUncompiledScripts', 'watch:copyUncompiledScripts', 'copyFonts', 'watch:copyFonts']);

gulp.task('develop', gulpSequence('clean', pagesArr.concat(['copyfiles', 'handleimages']), 'serve'));

function swallowError(error) {
    gutil.log(gutil.colors.red(error.toString()));
    notify('Error' , error.toString());
    this.emit('end');
}

gulp.task('prod', gulpSequence('clean', 'copyUncompiledScripts', 'copyFonts', 'imagemin', 'lint', ['css', 'js'], 'compress'));