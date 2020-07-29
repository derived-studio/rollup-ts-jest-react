import path from 'path'

export const process = function(src, filename, config, options) {
  return `module.exports = ${JSON.stringify(path.basename(filename))};`
}
