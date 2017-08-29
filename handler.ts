'use strict';

import redis from './config/redis/client'
import {
    Request,
    ReplyNoContinue
} from 'hapi'


const handler = {
    set (request: Request, reply: ReplyNoContinue) {
            const key = request.query.key
            const value = request.query.value
            redis.set(key, value);
            reply("succesful");
        },

    get (request: Request, reply: ReplyNoContinue) {
            const key = request.query.key
            let a
            redis.get(key, (err, result) => {
              a = result
            reply(a);
            });
        }
}

export default handler
