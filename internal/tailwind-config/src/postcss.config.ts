import config from '.'

export default {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    tailwindcss: { config },
  },
}
