const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
   'resources/ngapp/dist/ngapp/runtime.js',
   // 'resources/ngapp/dist/ngapp/vendor.js',
   // 'resources/ngapp/dist/ngapp/styles.js',
   'resources/ngapp/dist/ngapp/polyfills.js',
   'resources/ngapp/dist/ngapp/main.js',
], 'public/js/app.js');

mix.sass(
   'resources/sass/app.scss',
   'public/css/app.css'
);
