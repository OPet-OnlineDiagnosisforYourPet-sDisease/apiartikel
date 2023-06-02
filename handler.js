const articles = require('./artikel.json');

function getArticleByTitle(title) {
    return articles.artikel.find(article => article.judul === title);
}

function getAllArticles() {
    return articles.artikel;
}

module.exports = {
    getArticleByTitle,
    getAllArticles
};
