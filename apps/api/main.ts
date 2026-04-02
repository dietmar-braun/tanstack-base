import { Hono, Context } from 'hono'
import { cors } from "hono/cors"

//import { createCMS } from "./src/cms/cmsManager.ts"

import { contentRoute } from "./src/routes/api/content.ts"

const app = new Hono()

app.use("*", cors())

app.get('/', (c:Context) => {
  return c.text('Hello Hono!')
})

app.route('/api/content', contentRoute);

Deno.serve(app.fetch)