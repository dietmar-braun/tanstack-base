import { Hono, Context} from 'hono';
import { getArticles } from "../services/content.service.ts";


export const contentRoutes = new Hono();

contentRoutes.get('articles', getArticles)