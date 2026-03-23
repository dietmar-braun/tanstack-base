import { Hono, Context } from 'hono'
import { cors } from "hono/cors"

const app = new Hono()

app.use("*", cors())

app.get('/', (c:Context) => {
  return c.text('Hello Hono!')
})

Deno.serve(app.fetch)
