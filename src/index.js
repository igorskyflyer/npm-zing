/**
 * Formats the provided string in a C# style format, i.e. adds the ability to use positional arguments - composite formatting, like seen with `String.Format` and related methods in C#.
 * @see {@link https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting}
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
