/**
 * Formats the provided string in a C-style format, i.e. adds the ability to use positional arguments, like seen with `printf` in C.
 * @param {string} value
 * @returns {string}
 */
function zing(value) {
  if (arguments.length <= 1) {
    return ''
  }

  const args = Array.prototype.slice.call(arguments, 1)

  return value.replace(/\{(\d+)\}/g, function (match, index) {
    return typeof args[index] !== 'undefined' ? args[index] : match
  })
}

module.exports = { zing }
