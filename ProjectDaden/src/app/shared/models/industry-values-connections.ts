export interface BrandIndustryRules {
    rules: Rule[];
}

export interface Rule {
    condition: Condition;
    archetype: string;
}

export interface Condition {
    industry: string[];
    value: string[];
}
