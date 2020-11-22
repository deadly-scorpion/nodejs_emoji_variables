# Emoji encoder
<a href="https://buymeacoff.ee/rBuzC4v" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>


 Node js encoder / decoder what change all emoji variables to valid variabler.

# Features!
 - Replace emojis variables to emoji hex.
 
# To Do
 - [ ] Ignore emoji in string.
 - [ ] Ignore emoji in comments.

### Installation

Project requires [Node.js](https://nodejs.org/) v10+ to run.


```sh
$ cd .
$ npm install
```

Edit index.js

```sh
$ npm run start
```

### Commands
Encode emoji to hex index.js

```sh
$ npm run encode
```
Decode emoji hex to emoji index.js

```sh
$ npm run decode
```
Encode emoji to hex and run index.js

```sh
$ npm run start
```


### Preview
index.js before encode
```js
var 
	🤪 = 'Hello',
	🚀 = 'world';

console.log(🤪 + 🚀)
```
index.js after encode
```js
var 
	e_1f92a = 'Hello',
	e_1f680 = 'world';

console.log(e_1f92a + e_1f680)
```
