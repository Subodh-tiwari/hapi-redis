// import * as Redis from 'ioredis';
// var redis = new Redis();

// const storeKey = () => {

// redis.set('foo', 'bar');
// redis.get('foo', (err, result) => {
//   console.log(result);
// });
// }
// storeKey();



'use strict';

import * as Hapi from 'hapi'

import routes from './routes';

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route(routes);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
