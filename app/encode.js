var fs = require('fs');
const rex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;

function EEncode(str) {
	return str.replace(rex, (m, idx) =>
		`e_${m.codePointAt(0).toString(16)}`
	);
}

function EDecode(str) {
	return str.replace(/e_([0-9a-fA-F]+)/g, (match, hex) =>
		String.fromCodePoint(Number.parseInt(hex, 16))
	);
}

if (fs.existsSync('index.js')) {
	fs.readFile('index.js', function(err, data) {
		fs.writeFile('index.js', EEncode(data.toString()), function (err) {
		  if (err) throw err;
		  console.log('Encoded!');
		});
	})
} console.log('index.js nonexist')

