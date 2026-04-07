import { DirectusAdapter } from "./adapters/directus.ts";
import { StrapiAdapter } from "./adapters/strapi.ts";
import { I_CMSAdapter, I_CMSConfig, T_CMSType } from "./types.ts";

type T_CMSAdapterConstructor = new (config: I_CMSConfig) => I_CMSAdapter;

const adapterMap={
    directus: DirectusAdapter,
    strapi: StrapiAdapter,
} satisfies Partial<Record<T_CMSType, T_CMSAdapterConstructor>>

export const createCMS = (config:I_CMSConfig) : I_CMSAdapter => {
    const AdapterClass: T_CMSAdapterConstructor = adapterMap[config.type as keyof typeof adapterMap];
    
    if (!AdapterClass)
        throw new Error(`CMS ${config.type} is not supported`)

    return new AdapterClass(config);
}