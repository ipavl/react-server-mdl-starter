import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

const app = new Express();
const server = new Server(app);
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (request, response) => {
  match(
    { routes, location: request.url },
    (err, redirectLocation, renderProps) => {
      if (err) {
        return response.status(500).send(err.message);
      }

      if (redirectLocation) {
        return response.redirect(302, redirectLocation.pathName + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps} />);
      } else {
        markup = renderToString(<NotFoundPage/>);
        response.status(404);
      }

      return response.render('index', { markup });
    }
  );
});

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.info(`Running as ${env} on http://localhost:${port}`);
});
