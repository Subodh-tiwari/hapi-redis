'use strict'

import {
    RouteConfiguration
} from 'hapi'

import * as Joi from 'joi'
import handler from './handler';

const routes: RouteConfiguration[]  = [
    {
        method: 'GET',
        path: '/set',
        config: {
            validate: {
                query: {
                    key: Joi.string().required(),
                    value: Joi.string().required()
                }
            }
        },
        handler: handler.set
    },

    {
        method: "GET",
        path: "/get",
        config: {
            validate : {
                query : {
                    key: Joi.string().required()

                }
            }
        },
        handler: handler.get
    }
]

export default routes
