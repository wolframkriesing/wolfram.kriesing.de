import ReactDOM from 'react-dom';
import { parse } from './markdown-converter.js';
import fetch from 'isomorphic-fetch'

import React from 'react';
import ArticlePage from './components/ArticlePage.js';
import ArticleList from './components/ArticleList.js';

const withFileContent = (fileContent) => {
  const articles = parse(fileContent).articles;
  console.log(JSON.stringify(articles[0], null, 4));
  
  ReactDOM.render(<ArticleList articles={ articles }/>, document.getElementById('app'));
  // ReactDOM.render(<ArticlePage articles={ [articles[0]] }/>, document.getElementById('app'));
};

fetch('./content/tech.md')
  .then(fileContent => fileContent.text())
  .then(withFileContent)
;


// const rendered = React.renderToString(<ArticlePage articles={articles}/>);
// const indexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8');
// console.log(indexHtml + rendered);
