import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import _ from 'lodash';

import config from '../config';
import webpackConfig from './dev.config.babel';

const compiler = webpack(webpackConfig);
const app = express();

const serverOptions = {
//  contentBase: `http://${config.server_host}:${config.server_port}`,
  contentBase: 'src',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
};

const middleware = webpackMiddleware(compiler, serverOptions);

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.use('/api', express.static('./src/web-api'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/preferences', function(req, res) {
  // Convert from string to int
  var genreIds = _.map(req.body.genres, function( id ) {
    return parseInt( id );
  });

  var preferences = {
    genreIds: genreIds
  };

  // Save changes to preferences.json
  fs.writeFile('./src/web-api/preferences.json', JSON.stringify(preferences), function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(preferences);
  });
});

app.listen(config.server_port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', config.server_port);
  }
});
