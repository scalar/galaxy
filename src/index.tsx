import { renderer } from './renderer'

import { createMockServer } from '@scalar/mock-server'
import galaxy from './scalar-galaxy-3.1.json'

// Create the mocked routes
const app = await createMockServer({
  specification: galaxy,
})

app.use(renderer)

export default app
