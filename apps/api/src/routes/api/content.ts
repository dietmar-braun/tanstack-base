import { Context, Hono } from "hono";
import { I_CMSAdapter } from "../../cms/types.ts";
import { json } from "node:stream/consumers";

export const contentRoute = new Hono();

contentRoute.get("/:collection", async (context:Context) => {
    const cmsAdapter : I_CMSAdapter = context.get("cmsAdapter");
    const collection = context.req.param("collection")

    if(cmsAdapter !== null && typeof collection === 'string' ){
        console.log("hallo", await cmsAdapter.getCollection(collection) )
    }

    return context.json({});
});