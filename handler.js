const articles = require('./artikel.json');

function getArticleByTitle(title) {
    const article = articles.artikel.find(article => article.judul === title);
    if (article) {
        return {
            success: true,
            message: "Data artikel berhasil ditemukan.",
            data: article
        };
    } else {
        return {
            success: false,
            message: "Data artikel tidak ditemukan."
        };
    }
}

function getAllArticles() {
    return {
        success: true,
        message: "Data artikel berhasil diperoleh.",
        data: articles.artikel
    };
}

module.exports = {
    getArticleByTitle,
    getAllArticles
};
