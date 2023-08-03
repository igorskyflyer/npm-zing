// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * Formats the provided string in a C# style format, i.e. adds the ability to use positional arguments - composite formatting, like seen with `String.Format` and related methods in C#.
 * @see {@link https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting}
 */
export function zing(value: string, ...rest: string[]): string {
  if (typeof value !== 'string') {
    return ''
  }

  if (rest.length === 0) {
    return value || ''
  }

  return value.replace(/\{(\d+)\}/g, (match, index) =>
    typeof rest[index] !== 'undefined' ? rest[index] : match
  )
}
