const articles = require('./artikel.json');

function getArticleByTitle(title) {
    return articles.artikel.find(article => article.judul === title);
}

module.exports = {
    getArticleByTitle
};