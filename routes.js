const express = require('express');
const router = express.Router();
const handler = require('./handler');

router.get('/article/:title', (req, res) => {
    const title = req.params.title;
    const article = handler.getArticleByTitle(title);

    if (article) {
        res.json(article);
    } else {
        res.status(404).json({ error: 'Article not found' });
    }
});

router.get('/article', (req, res) => {
    const allArticles = handler.getAllArticles();
    res.json(allArticles);
});

module.exports = router;
