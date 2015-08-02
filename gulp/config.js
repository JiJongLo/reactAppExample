var dest = './build/',
  src = './project/',
  mui = './node_modules/material-ui/src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest]
    },
    files: [
      dest + '**'
    ]
  },
  markup: {
    src: src + "**",
    dest: dest
  },
  watch : {
    srcJs : src + "js/**.jsx",
    srcCss : src + "css/**",
    srcHtml : src + "*",
  },
  browserify: {
    // Enable source maps
    debug: false,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './project/js/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  }
};
