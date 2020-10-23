import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { article } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>{article.id.substring(article.id.lastIndexOf('/') + 1)}</h1>
    <img src={'https://www.euromoneycdn.com/'+ article.fields.coverImage} alt={article.fields.title} />
    <h2>Article summary should be here</h2>
    {/* <ul>
      {article.abilities.map(ability => (
        <li key={ability.name}>
          <Link to={`./article/${article.name}/ability/${ability.name}`}>
            {ability.name}
          </Link>
        </li>
      ))}
    </ul> */}
    <Link to="/articles">Back to all Articles</Link>
  </div>
);