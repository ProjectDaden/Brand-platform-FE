import { signal } from "@angular/core";
import { SignalCollection } from "../../../shared/models/signal-object-creation";

export interface TargetAudience {
    ageGroups: string[];
    selectedAge: string;
    audienceLocations: string[];
    selectedLocation: string;
}

export const TARGET_AUDIENCE_DEFAULT: TargetAudience = {
    ageGroups: [""],
    selectedAge: "",
    audienceLocations: [""],
    selectedLocation: ""
}

export const targetAudienceDefault: SignalCollection<TargetAudience> = {
    genericSignalCollection: signal(TARGET_AUDIENCE_DEFAULT)
}