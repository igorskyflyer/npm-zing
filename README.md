# ✨ Zing

🐌 Zing is C-style String formatter for JavaScript that empowers Strings with positional arguments. 🚀
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

Formats the provided string in a C-style format, i.e. adds the ability to use positional arguments, like seen with `printf` in C.
See [printf()](https://docs.microsoft.com/en-us/cpp/c-runtime-library/printf-p-positional-parameters?view=msvc-170).

<br>

`value: string` => The string to process that support positional parameters, i.e. `zing('Hello {0} {1}', 'Igor', 'Dimitrijević')` would output `Hello Igor Dimitrijević`.

The returned value is always a `string`.
