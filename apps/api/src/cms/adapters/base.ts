import { I_CMSConfig } from "../types.ts";

export class BaseAdapter {
    config : I_CMSConfig;

    constructor (config:I_CMSConfig) {
        this.config = config;
    }
    
}