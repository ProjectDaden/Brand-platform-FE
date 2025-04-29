import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navigation, NavigationCategory } from '../models/nav-sidebar-interface';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ArchetypeSetupService } from '../../../services/archetype/archetype-setup.service';
import { UrlTrackerService } from '../../../shared/navigation-url-helper/generic-navigation-location-data';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly urlTrackerService = inject(UrlTrackerService);
  private readonly archetypeInitialisation = inject(ArchetypeSetupService)

  navigation = signal<NavigationCategory>({});

  /**
   * Navigation service for the sidebar.
   * this service keeps track of the segments/pathvariables and queryparameters passed 
   * from the router while navigating through the application. It passes the data to 
   * "URLTrackerService" into a signal that updates when users are actively navigating.
   */
  constructor() {
    this.loadNavigation();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const segments = this.router.url.split('/').filter(segment => segment);
      this.urlTrackerService.segments.set(segments);
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.urlTrackerService.queryParams.set(params);
    });
    this.archetypeInitialisation.init();
  }

  /**
   * This loads the navigatable items into the sidebar.
   * It uses the httpClient to fetch navigationdata (now a json file, future implementation 
   * a backend call will replace the json).
   */
  // TODO replace the local json with a backend call.
  loadNavigation() {
    this.http.get<Navigation>('assets/tempUsage/nav-side-bar.json')
      .subscribe(data => {
        console.log(data, "Data here");
        this.navigation.set(data['nav-side-bar'].categories);
      });
  }
}