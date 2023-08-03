# ✨ Zing

🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments, more information [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting). 🚀

<br>

<blockquote align="center">
	<h4>💖 Support further development</h4>
	<span>I work hard for every project, including this one and your sponsorship means a lot to me!
	<br>
	Consider buying me a coffee. ☕
	<br>
	<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
	<br>
	<br>
	<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
	<br>
	<br>
	<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
</blockquote>

<br>
<br>
<br>

> 💡 This module has been selected to be part of the [Project NextWave](https://github.com/igorskyflyer/project-nextwave), thus, it is `ESM-only`. For legacy, CommonJS usage, install the previous major release.

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/zing"
```

---

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

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-zing/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/keppo](https://www.npmjs.com/package/@igor.dvlpr/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

[@igor.dvlpr/normalized-string](https://www.npmjs.com/package/@igor.dvlpr/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

[@igor.dvlpr/comment-it](https://www.npmjs.com/package/@igor.dvlpr/comment-it)

> _📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 40 languages are currently supported. 💻_

[@igor.dvlpr/duoscribi](https://www.npmjs.com/package/@igor.dvlpr/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_
