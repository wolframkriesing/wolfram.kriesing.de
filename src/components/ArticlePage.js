import React from 'react';
import marked from 'marked';

export default class ArticlePage extends React.Component {

  render() {
    let {articles} = this.props;
    return (
      <body>
        <h1>Tech</h1>
      
        {articles.map(article => <Article article={article}/>)}
      
      </body>
    );
  }
}

class Article extends React.Component {

  render() {
    let {headline, content, tags} = this.props.article;
    return (
      <div>
        <h2><a href='???' className='linkable'><span>¶</span></a>{headline}</h2>
        {content.map(piece => <ContentPiece piece={piece}/>)}
        <Tags tags={tags}/>
      </div>
    );
  }
}

class Tags extends React.Component {

  render() {
    let {tags} = this.props;
    return (
      <ul className="tags">
        {tags.map(tag => <li>{tag}</li>)}
      </ul>
    );
  }
}

class ContentPiece extends React.Component {

  render() {
    let {type, text} = this.props.piece;
    if (type === 'paragraph') {
      return <p dangerouslySetInnerHTML={{__html: marked(text)}} />;
    } else if (type === 'blockquote') {
      return <blockquote dangerouslySetInnerHTML={{__html: marked(text)}} />;
    }
    return <p>text</p>
  }
}
