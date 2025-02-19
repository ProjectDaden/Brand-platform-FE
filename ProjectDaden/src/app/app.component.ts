import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from './features/nav-sidebar/nav-sidebar.component';
import { AsidePreviewsComponent } from './features/aside-previews/aside-previews.component';
import { ToolColorPickerComponent } from './features/tool-color-picker/tool-color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavSidebarComponent, AsidePreviewsComponent, ToolColorPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjectDaden test';
}
