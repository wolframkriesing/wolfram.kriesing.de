import fs from 'fs';
import {parse} from './markdown-converter.js';

const fileContent = fs.readFileSync(__dirname + '/../content/tech.md', 'utf8');

const articles = parse(fileContent).articles;
//console.log(JSON.stringify(articles, null, 4));

import React from 'react';
import ArticlePage from './components/ArticlePage.js';

const rendered = React.renderToString(<ArticlePage articles={articles}/>);
const indexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8');
console.log(indexHtml + rendered);
