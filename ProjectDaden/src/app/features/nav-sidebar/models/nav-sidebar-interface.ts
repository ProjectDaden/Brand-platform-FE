export interface NavigationItem {
    [key: string]: string;
  }
  
  export interface NavigationCategory {
    [key: string]: NavigationItem;
  }
  
  export interface Navigation {
    'nav-side-bar': {
      categories: NavigationCategory;
    }
  }