var index = require('../controllers/index.server.controller');

module.exports = function (app) {
  app.get('/api', index.api);
  app.get('/', index.home);
  // app.get('/*', index.render);
  app.get('/formal', index.formal);
  app.get('/home', index.home);
  app.get('/about', index.about);
  app.get('/showcase', index.showcase);
  app.get('/product', index.product);
  app.get('/contact', index.contact);

  app.get('/react', index.react);
};