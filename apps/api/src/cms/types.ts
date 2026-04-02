export interface I_CMSAdapter {
    getCollection(collectionName:string):Promise<unknown[]>
}

export type T_CMSType = 'contentful' | 'directus' | 'strapi' | 'custom'  

export interface I_CMSConfig {
    type: T_CMSType,
    apiKey: string,
    baseUrl: string
}

export interface I_CollectionItem {
    id: string | number,
    title: string
}


export interface I_CollectionItemArticle extends I_CollectionItem {
    content: string,
    publishedAt: string
}