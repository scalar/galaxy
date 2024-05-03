import { createMockServer } from '@scalar/mock-server'

import { renderer } from './renderer'
import galaxy from '@scalar/galaxy/latest.yaml?raw'

// Create the mocked routes
const app = await createMockServer({
  specification: galaxy,
})

app.use(renderer)

export default app
