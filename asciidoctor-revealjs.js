const fs = require('fs');
const asciidoctor = require('@asciidoctor/core')();
const asciidoctorRevealjs = require('@asciidoctor/reveal.js');
asciidoctorRevealjs.register();

const distDirPath = './dist';

const options = {safe: 'safe', backend: 'revealjs', to_dir: distDirPath, mkdirs: true, standalone: true};
asciidoctor.convertFile('index.adoc', options);

fs.cp('./styles', distDirPath + '/styles', {recursive: true}, (err) => console.error);
fs.cp('./assets', distDirPath + '/assets', {recursive: true}, (err) => console.error);
fs.cp('./node_modules/reveal.js', distDirPath + '/node_modules/reveal.js', {recursive: true}, (err) => console.error);
