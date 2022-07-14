module.exports = () => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const env = nodeEnv === 'production' ? 'prod' : 'dev'
  return require('./build/webpack.config.' + env + '.js')
}