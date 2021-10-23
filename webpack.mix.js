let mix = require('laravel-mix');

mix.js("src/app.js", "dist/js")
    .postCss("src/app.css", "dist/css", [
        require("tailwindcss"),
    ]);