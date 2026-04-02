import { Context, Hono } from "hono";

export const contentRoute = new Hono();

contentRoute.get("/:collection", async (context:Context) => {

});