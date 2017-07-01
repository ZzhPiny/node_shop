var path = require('path');
var fs = require('fs');
var os = require('os');
// fs.writeFile('./fs.json', JSON.stringify(Object.keys(fs)), 'utf-8', function(err) {
//     console.log(err);
// });
// fs.writeFile('./path.json', JSON.stringify(Object.keys(path)), 'utf-8', function(err) {
//     console.log(err);
// });
// fs.writeFile('./os.json', JSON.stringify(os, (key, value) => {
//     console.log(key, value)
//     if(!!key) return value;
//     if(value === os) return '';
//     if(typeof value === 'function') return 'function';
//     return value;
// }, 4), 'utf-8', function(err) {
//     console.log(err);
// })
fs.readFile('./webpack.config.js', 'utf-8', (err, data) => {
    console.log(typeof data)
    console.log(data.spilt('\n'))
})