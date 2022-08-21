/**
 * Formats the provided string in a C-style format, i.e. adds the ability to use positional arguments, like seen with `printf` in C.
 * @see {@link https://docs.microsoft.com/en-us/cpp/c-runtime-library/printf-p-positional-parameters?view=msvc-170}
 * @param {string} value
 * @returns {string}
 */
function zing(value) {
  if (arguments.length <= 1) {
    return value || ''
  }

  const args = Array.prototype.slice.call(arguments, 1)

  return value.replace(/\{(\d+)\}/g, function (match, index) {
    return typeof args[index] !== 'undefined' ? args[index] : match
  })
}

module.exports = { zing }
