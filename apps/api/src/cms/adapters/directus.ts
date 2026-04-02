import { I_CMSAdapter, I_CMSConfig } from "../types.ts";
import { BaseAdapter } from "./base.ts";

export class DirectusAdapter extends BaseAdapter implements I_CMSAdapter {
    constructor(config:I_CMSConfig){
        super(config);
    }

    async getCollection(collectionName: string): Promise<unknown[]> {
        const response = await fetch(`${this.config.baseUrl}/items/${collectionName}`, {
            headers: { Authorization: `Bearer ${this.config.apiKey}` }
        });

        const json = await response.json();
        return json.data; // Directus-spezifisches Mapping
    }
}