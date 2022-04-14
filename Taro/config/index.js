const path = require('path');

const config = {
  projectName: 'Taro',
  date: '2022-4-12',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  alias: {
    '~': path.resolve(__dirname, '../src'),
    '@': path.resolve(__dirname, '../src'),
    '@@': path.resolve(__dirname, '..'),
  },
  plugins: ['taro-plugin-pinia'],
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
      },
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development')
    return merge({}, config, require('./dev'));

  return merge({}, config, require('./prod'));
};
