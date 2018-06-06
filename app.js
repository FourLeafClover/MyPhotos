var fs = require('fs')

var albums = JSON.parse(fs.readFileSync('./albums.json'));
console.log(albums)
albums.forEach(album => {
    var files = fs.readdirSync(`./data/${album.name}/3x`);
    let result = [];
    files.forEach(item => {
        result.push(`${item}`);
    })
    fs.writeFileSync(`./${album.name}.json`, JSON.stringify(result));
})