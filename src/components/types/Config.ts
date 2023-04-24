export interface Project {
    name: string;
    url: string;
}


export interface SiteMap extends Project {
    location?: string;
}


export interface Social extends Project {
    icon?: string;
}