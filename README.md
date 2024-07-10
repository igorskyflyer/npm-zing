# Zing

<br>

<p align="center">
	🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting, more information <a href="https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting">composite formatting <img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/external.svg" alt="An external link" width="12" height="12"></a>. 🚀
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/zing"
```

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

---

## 📝 Changelog

> ✨ Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-zing/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-zing/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/recursive-readdir](https://www.npmjs.com/package/@igor.dvlpr/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_

<br>

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igor.dvlpr/unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>

[@igor.dvlpr/scrollend-polyfill](https://www.npmjs.com/package/@igor.dvlpr/scrollend-polyfill)

> _🛴 A performant and light (< 1KB) JavaScript polyfill for the scrollend Event. ⛸️_

<br>
<br>

Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
