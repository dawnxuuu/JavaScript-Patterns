import serve from 'rollup-plugin-serve'
import livereload from "rollup-plugin-livereload"

export default {
  input: {
    'pattern1/dist/main-bundle': 'src/pattern1/main.js',
    'pattern2/dist/main-bundle': 'src/pattern2/main.js',
  },
  output: {
    dir: 'src',
  },
  watch: {
    include: ['src/**']
  },
  plugins: [
    serve({
      contentBase: 'src',
      port: 8200
    }),
    livereload('src')
  ]
};