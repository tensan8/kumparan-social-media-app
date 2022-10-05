module.exports = (api) => {
  return {
    presets: [
      [
        '@babel/preset-react',
        {
          development: !api.env('production'),
          runtime: 'automatic'
        }
      ],
      [
        '@babel/preset-env'
      ],
      '@babel/preset-typescript'
    ],
    plugins: ['@babel/plugin-transform-runtime'],
    env: {
      development: {
        plugins: []
      },
      production: {
        plugins: []
      }
    }
  }
}
