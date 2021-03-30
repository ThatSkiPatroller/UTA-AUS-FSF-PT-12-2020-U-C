// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// which view to render? maps to all.handlebars file for when we hit server-side endpoint
  res.render('all');
});

module.exports = router;
