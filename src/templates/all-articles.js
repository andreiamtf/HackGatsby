import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { allArticles } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose an article!</h1>
    <ul style={{ padding: 0 }}>
      {allArticles.map(article => (
        <li
          key={article.id.substring(article.id.lastIndexOf('/') + 1)}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          <Link to={`/article/${article.id.substring(article.id.lastIndexOf('/') + 1)}`}>
            <img src={'https://www.euromoneycdn.com/'+ article.fields.coverImage} alt={article.fields.title} />
            <p>{article.fields.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);