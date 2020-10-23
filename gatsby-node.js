const fetch = require('node-fetch');

const body = {
    "top": 5,
    "query": {
        "filters": {
            "ContentTypeFilter": {
                "field": "content_type",
                "value": "Opinion"
            }
        }
    },
    "orderBy": {
        "dates": "desc"
    },
    "fields": [
        "title",
        "summary",
        "coverImage"
    ]
};

const getArticlesData = async () =>{
    const response =  await fetch('https://uat-api.euromoneydigital.com/data-service/queries/telecoms-articles/search',{
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xx' },
    });
    const json = await response.json();
    console.log('json', json);  
    return json.results;   
}

exports.createPages = async ({ actions: { createPage } }) => {
  const allArticles = await getArticlesData();

  // Create a page that lists all Articles.
  createPage({
    path: `/articles`,
    component: require.resolve('./src/templates/all-articles.js'),
    context: { allArticles }
  });

  // Create a page for each Article.
  allArticles.forEach(article => {
    console.log('article', article);  
    createPage({
      path: `/article/${article.id.substring(article.id.lastIndexOf('/') + 1)}/`,
      component: require.resolve('./src/templates/article.js'),
      context: { article }
    });

    // // Create a page for each ability of the current Pokémon.
    // pokemon.abilities.forEach(ability => {
    //   createPage({
    //     path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
    //     component: require.resolve('./src/templates/ability.js'),
    //     context: { pokemon, ability }
    //   });
    // });
  });
};

