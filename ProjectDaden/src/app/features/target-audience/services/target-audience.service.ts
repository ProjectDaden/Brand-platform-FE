import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgeGroup, Location } from '../store/target-audience.model';
import { targetAudienceDefault } from '../models/target-audience-interface';

@Injectable({
  providedIn: 'root'
})
export class TargetAudienceService {
  private readonly http = inject(HttpClient);

  ageAndLocationListPath = "assets/tempUsage/target-audience.json";
  targetAudience = targetAudienceDefault;

  loadAgeGroups(): Observable<AgeGroup> {
    return this.http.get<AgeGroup>(this.ageAndLocationListPath);
  }

  loadLocations(): Observable<Location> {
    return this.http.get<Location>(this.ageAndLocationListPath);
  }

  getTargetAudience() {
    console.log(this.targetAudience.genericSignalCollection(), " <--- target audience collection");
    return this.targetAudience.genericSignalCollection;
  }
}
