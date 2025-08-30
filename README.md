<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-zing/main/media/zing.png" alt="Icon of Zing" width="256" height="256">
  <h1>Zing</h1>
</div>

<br>

<h4 align="center">
  🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

 - ⚡ Quick formatting - Drop in `{0}`, `{1}` placeholders and swap them instantly
 - 🛠 C#-style syntax - Familiar composite formatting for .NET devs in JS/TS
 - 🎯 Positional arguments - Control exactly where each value lands
 - 🛡 Safe fallback - Leaves unknown placeholders untouched
 - 🧩 Lightweight utility - No dependencies, minimal footprint
 - 🔄 Multi-replace - Handles all matching placeholders in one pass
 - 📜 TypeScript-ready - Strong typing for cleaner code
 - 🌍 Cross-platform - Works in browser and Node environments

<br>

> ℹ️ **NOTE**
>
> *More information*
>
> More information about [composite formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting).
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/zing
```

```bash
yarn add @igorskyflyer/zing
```

```bash
npm i @igorskyflyer/zing
```

<br>
<br>

## 🤹🏼 API

```ts
zing(value: string, ...args: any[]): string
```

Formats the provided string in a C# style format, i.e. adds the ability to use positional arguments, like seen with `String.Format` in C#.

See [Composite formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting).

<br>

`value: string` => The string to process that support positional parameters, i.e. `zing('Hello {0} {1}', 'Igor', 'Dimitrijević')` would output `Hello Igor Dimitrijević`.

The returned value is always a `string`.


<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-zing/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-zing/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/recursive-readdir](https://www.npmjs.com/package/@igorskyflyer/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_

<br>

[@igorskyflyer/jmap](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igorskyflyer/unc-path](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igorskyflyer/scrollend-polyfill](https://www.npmjs.com/package/@igorskyflyer/scrollend-polyfill)

> _🛴 A performant and light (< 1KB) JavaScript polyfill for the scrollend Event. ⛸️_


<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
