'use strict'
// serverless.js
module.exports = {
  service: 'users',
  functions: {
    usersCreate: {
      events: [
        {
          httpApi: 'POST /users/create',
        },
      ],
    },
    // ...
  },
  resources: {},
}

// Requiring @types/serverless in your project package.json

import type { Serverless } from 'serverless/aws'
// serverless.ts
const serverlessConfiguration: Serverless = {
  service: 'users',
  functions: {
    usersCreate: {
      events: [
        {
          httpApi: 'POST /users/create',
        },
      ],
    },
    // ...
  },
  resources: {},
}
module.exports = serverlessConfiguration

