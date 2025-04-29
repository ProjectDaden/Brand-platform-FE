import { signal } from "@angular/core";
import { SignalCollection } from "../../../shared/models/signal-object-creation";

export interface BrandIndustry {
    industry: string;
    values: string[];
}

export const BRAND_INDUSTRY_DEFAULT: BrandIndustry = {
    industry: "",
    values: [""],
};

export const brandIndustryDefault: SignalCollection<BrandIndustry> = {
  genericSignalCollection: signal(BRAND_INDUSTRY_DEFAULT)
}