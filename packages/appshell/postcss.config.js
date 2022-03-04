module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('postcss-short')(),
    require('cssnext')(),
    require('postcss-quantity-queries')(),
    require('precss')(),
    require('postcss-utilities')
  ]
}
