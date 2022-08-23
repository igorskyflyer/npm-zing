# ✨ Zing

🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments, more information [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting). 🚀

<br>

Install it by running

```shell
npm i "@igor.dvlpr/zing"
```

<br>

## API

```ts
zing(value: string, ...args: any[]): string
```

Formats the provided string in a C# style format, i.e. adds the ability to use positional arguments, like seen with `String.Format` in C#.

See [Composite formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting).

<br>

`value: string` => The string to process that support positional parameters, i.e. `zing('Hello {0} {1}', 'Igor', 'Dimitrijević')` would output `Hello Igor Dimitrijević`.

The returned value is always a `string`.
