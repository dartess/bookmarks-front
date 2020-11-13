const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const rootDirFiles = fs.readdirSync(rootDir);
const mdFiles = rootDirFiles.filter(fileName => path.extname(fileName) === '.md');
const mdFilesContent = mdFiles.map(fileName => fs.readFileSync(path.join(rootDir, fileName), {encoding: 'utf-8'}));
const allContent = mdFilesContent.reduce((acc, content) => acc + content);
const links = [...allContent.matchAll(/\[[^\]]+\]\((http.+?)\)/g)].map(match => match[1]);
const duplicatesLinks = [...new Set(links.filter((elem, pos) => links.indexOf(elem) !== pos))];

if (duplicatesLinks.length === 0) {
    console.log(`Ссылок найдено: ${links.length}`);
} else {
    console.log('Найдены дубликаты:', duplicatesLinks);
    process.exit(1);
}
