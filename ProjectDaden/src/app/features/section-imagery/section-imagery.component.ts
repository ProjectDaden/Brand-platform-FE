import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-section-imagery',
  imports: [
    DadenDropdownComponent,
    FormsModule,
    CommonModule,
    HttpClientModule, // For HTTP requests to Unsplash
  ],
  templateUrl: './section-imagery.component.html',
  styleUrl: './section-imagery.component.scss',
  standalone: true,
})
export class SectionImageryComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.selectedPersonality = this.getPersonalityFromBrandValues();
    this.loadImageryOptions(this.selectedPersonality);
    this.fetchStockPhotos(); // Initial fetch
  }

  // Personality and Imagery Logic
  personalityOptions: string[] = [
    'Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover',
  ];
  selectedPersonality: string = '';
  imageryStyles: string[] = ['Abstract', 'Realistic', 'Minimalist', 'Vintage', 'Bold'];
  selectedImageryStyle: string = 'Abstract'; // Default style
  stockPhotos: { url: string; alt: string; selected: boolean }[] = [];
  searchQuery: string = ''; // For stock photo search

  // Target Audience Mock Data (replace with actual service/data)
  targetAudience = {
    age: '25-34',
    location: 'Urban',
    interests: ['Technology', 'Travel'],
  };

  // Unsplash API Configuration
  private unsplashAccessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your key
  private unsplashApiUrl = 'https://api.unsplash.com/search/photos';

  handlePersonalitySelection(personality: string) {
    this.selectedPersonality = personality;
    this.loadImageryOptions(personality);
    this.fetchStockPhotos();
  }

  handleImageryStyleSelection(style: string) {
    this.selectedImageryStyle = style;
    this.fetchStockPhotos(); // Refetch based on style
  }

  private loadImageryOptions(personality: string) {
    // Adjust imagery styles based on personality (optional customization)
    switch (personality) {
      case 'Jester':
        this.imageryStyles = ['Bold', 'Abstract', 'Vintage'];
        break;
      case 'Creator':
        this.imageryStyles = ['Abstract', 'Minimalist', 'Realistic'];
        break;
      case 'Hero':
        this.imageryStyles = ['Bold', 'Realistic', 'Minimalist'];
        break;
      default:
        this.imageryStyles = ['Abstract', 'Realistic', 'Minimalist', 'Vintage', 'Bold'];
    }
    this.selectedImageryStyle = this.imageryStyles[0]; // Default to first option
  }

  fetchStockPhotos() {
    const query = this.buildSearchQuery();
    this.getUnsplashPhotos(query).subscribe(photos => {
      this.stockPhotos = photos.map(photo => ({
        url: photo.urls.small, // Use small size for preview
        alt: photo.alt_description || 'Stock photo',
        selected: false,
      }));
    });
  }

  private buildSearchQuery(): string {
    // Combine personality, imagery style, and target audience interests
    const baseQuery = `${this.selectedPersonality.toLowerCase()} ${this.selectedImageryStyle.toLowerCase()}`;
    const audienceQuery = this.targetAudience.interests.join(' ');
    return `${baseQuery} ${audienceQuery} ${this.searchQuery}`.trim();
  }

  private getUnsplashPhotos(query: string): Observable<any[]> {
    const url = `${this.unsplashApiUrl}?query=${encodeURIComponent(query)}&per_page=10&client_id=${this.unsplashAccessKey}`;
    return this.http.get<any>(url).pipe(
      map(response => response.results || [])
    );
  }

  togglePhotoSelection(index: number) {
    this.stockPhotos[index].selected = !this.stockPhotos[index].selected;
  }

  onSearchQueryChange() {
    this.fetchStockPhotos(); // Refetch when search query changes
  }

  private getPersonalityFromBrandValues(): string {
    return 'Jester'; // Mocked; replace with actual logic
  }

  // Output for connections
  get imageryOutput(): { style: string; selectedImages: string[] } {
    return {
      style: this.selectedImageryStyle,
      selectedImages: this.stockPhotos.filter(photo => photo.selected).map(photo => photo.url),
    };
  }

  // Lazy Loading with Intersection Observer
  ngAfterViewInit() {
    const images = this.document.querySelectorAll('.lazy-load');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset['src'] || '';
          img.classList.remove('lazy-load');
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '0px 0px 100px 0px' });

    images.forEach(img => observer.observe(img));
  }
}