import { renderer } from './renderer'

import { createMockServer } from '@scalar/mock-server'

// Create the mocked routes
const app = await createMockServer({
  specification: {
    openapi: '3.1.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    paths: {
      '/foobar': {
        get: {
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  example: {
                    foo: 'bar',
                  },
                },
              },
            },
          },
        },
      },
    },
  }
  ,
})
// const app = new Hono()

app.use(renderer)

// app.get('/', (c) => {
//   return c.render(<h1>Hello, Cloudflare Pages!</h1>)
// })

export default app
