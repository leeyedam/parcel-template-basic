module.exports = {
  presets: ['@babel/preset-env'],
  Plugins: [
    ['@babel/plugin-transform-runtime']
  ]
} // 우리가 작성하는 js파일이 ES5 문법으로 자동으로 변환되어 브라우저에서 동작
