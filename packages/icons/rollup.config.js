const babel = require('@rollup/plugin-babel').default
const filesize = require('rollup-plugin-filesize')

const config = {
  input: 'src/index.js',
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    filesize(),
  ],
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'YourLibraryName',
      globals: {
        react: 'React',
        '@babel/runtime/helpers/extends': '_extends', // Provide a global variable name
      },
    },
  ],
}

module.exports = config
