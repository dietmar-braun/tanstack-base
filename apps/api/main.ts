import { Hono, Context, Next} from 'hono'
import { cors } from "hono/cors"

import { createCMS } from "./src/cms/cmsManager.ts"

import { contentRoute } from "./src/routes/api/content.ts"

import {I_CMSConfig} from './src/cms/types.ts'
const app = new Hono()

app.use("*", cors())

app.get('/', (c:Context) => {
  return c.text('Hello Hono!')
})

/**
 *  Add CMS Middleware to conent URLs
 */
app.use('/api/content/*', async(c:Context, next:Next) => {
  const cmsConfig : I_CMSConfig = {
<   type:Deno.env('CMS_TYPE'),
    apiKey: Deno.env('CMS_APIKEY'),
    baseUrl: Deno.env('CMS_BASEURL')
  };
  
  await next();
});
app.route('/api/content', contentRoute);

Deno.serve(app.fetch)