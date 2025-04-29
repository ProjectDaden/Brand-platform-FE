export interface ArchetypeItem {
    headingFonts?: string[];
    bodyFonts?: string[];
    colorRange?: string[];
    industry?: string[];
    value?: string[];
}

export interface Archetype {
    [key: string]: ArchetypeItem;
}