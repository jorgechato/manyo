export interface Status {
    name: string;
    url: string;
}


export interface SiteMap extends Status {
    location?: string;
}


export interface Social extends Status {
    icon?: string;
}