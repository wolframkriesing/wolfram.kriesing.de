import React from 'react';

export default class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <ul>
        { articles.map(article => <Article article={article}/>) }
      </ul>
    )
  }
}

class Article extends React.Component {

  render() {
    let { headline, tags } = this.props.article;
    const mainTag = tags.length ? `[${ tags[0] }]` : '';
    return (
      <li>
        <a href='???' className='linkable'>{headline}</a> { mainTag }
      </li>
    );
  }
}
