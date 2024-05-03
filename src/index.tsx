import galaxy from '@scalar/galaxy/latest.yaml?raw'
// @ts-ignore
import { createMockServer } from '@scalar/mock-server'

import { renderer } from './renderer'

// Create the mocked routes
const app = await createMockServer({
  specification: galaxy,
})

app.use(renderer)

export default app
