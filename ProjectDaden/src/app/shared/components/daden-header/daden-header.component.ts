import { UrlTrackerService } from './../../navigation-url-helper/generic-navigation-location-data';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'daden-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './daden-header.component.html',
  styleUrl: './daden-header.component.scss'
})
export class DadenHeaderComponent implements OnInit {

  private readonly navTrack = inject(UrlTrackerService); 

  title = signal<string>("");
  subTitle = signal<string>("");

  // pageName: string = '';
  // categoryDescription: string = '';

  constructor(
    // private readonly navigationService: NavigationService,
    // private readonly router: Router,
    // private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.setHeaderInfo();
    const segments = this.navTrack.getAllSegments();
    this.setHeaderTitles();
    console.log(segments, "<---- All URL segments here to interact with");
  }

  public setHeaderTitles() {
    const title = this.navTrack.getSegment(1);
    this.title.set(title?.replace(/-/g, ' ') ?? "");
    const subTitle = this.navTrack.getSegment(2);
    this.subTitle.set(subTitle?.replace(/-/g, ' ') ?? "");
  }

  // public setHeaderSubTitle() {

  // }


  // private setHeaderInfo() {
  //   // Get current route segments
  //   const urlSegments = this.router.url.split('/');
  //   const categoryId = urlSegments[2];
  //   const pageKey = urlSegments[3];

  //   // Get navigation data from service
  //   const navigation = this.navigationService.navigation();
  //   if (!navigation || !categoryId || !pageKey) return;

  //   // Find page name and category description
  //   const categories = navigation;
  //   const category = categories[categoryId];
  //   if (category?.[pageKey]) {
  //     this.pageName = this.formatTitle(category[pageKey]); 
  //     this.categoryDescription = this.getCategoryDescription(categoryId);
  //   }
  // }

  // Format title (e.g., "mission-vision" -> "Mission & Vision")
  // private formatTitle(value: string): string {
  //   return value
  //     .split('-')
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  // }

  // // Placeholder for category description (customize as needed)
  // private getCategoryDescription(categoryId: string): string {
  //   const descriptions: { [key: string]: string } = {
  //     'core-brand-identity': 'Defining Your Brand’s Purpose',
  //     'brand-voice-and-tone': 'Shaping Your Brand’s Voice',
  //     'visual-identity': 'Defining Your Brand’s Face',
  //     'application-and-implementation': 'Applying Your Brand Guidelines'
  //   };
  //   return descriptions[categoryId] || 'Category Description';
  // }
}