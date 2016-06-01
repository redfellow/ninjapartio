/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('info', {
    title: 'Info'
  });
};
