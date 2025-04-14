import { Routes } from '@angular/router';
import { DadenLoginComponent } from './shared/components/daden-login/daden-login.component';
import { ToolColorPickerComponent } from './features/tool-color-picker/tool-color-picker.component';
import { AuthGuard } from './auth.service';

export const routes: Routes = [
  { path: 'login', component: DadenLoginComponent },
  { path: 'color-picker', component: ToolColorPickerComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'color-picker',
    loadComponent: () => import('./features/tool-color-picker/tool-color-picker.component')
      .then(m => m.ToolColorPickerComponent)
  },
  {
    path: 'v1',
    children: [
      {
        path: 'core-brand-identity',
        children: [
          {
            path: 'brandname-and-tagline',
            loadComponent: () => import('./features/brand-name/brand-name.component')
              .then(m => m.BrandNameComponent)
          },
          {
            path: 'vision-and-mission',
            loadComponent: () => import('./features/mission-vision/mission-vision.component')
              .then(m => m.MissionVisionComponent)
          },
          {
            path: 'industry-and-values',
            loadComponent: () => import('./features/brand-value-personality/brand-value-personality.component')
              .then(m => m.BrandValuePersonalityComponent)
          },
          {
            path: 'target-audience',
            loadComponent: () => import('./features/target-audience/target-audience.component')
              .then(m => m.TargetAudienceComponent)
          },
        ]
      },
      {
        path: 'brand-voice-and-tone',
        children: [
          {
            path: 'messaging-tone',
            loadComponent: () => import('./features/section-messaging/section-messaging.component')
            .then(m => m.SectionMessagingComponent)
          },
          {
            path: 'tone-of-voice',
            loadComponent: () => import('./features/voice-and-tone/voice-and-tone.component')
            .then(m => m.VoiceAndToneComponent)
          },
          {
            path: 'copywriting-tone',
            loadComponent: () => import('./features/section-copywright/section-copywright.component')
            .then(m => m.SectionCopywrightComponent)
          },
        ]
      },
      {
        path: 'visual-identity',
        children: [
          {
            path: 'logo-composer',
            loadComponent: () => import('./features/section-logo/section-logo.component')
            .then(m => m.SectionLogoComponent)
          },
          {
            path: 'color-composer',
            loadComponent: () => import('./features/tool-color-picker/tool-color-picker.component')
            .then(m => m.ToolColorPickerComponent)
          },
          {
            path: 'typography-composer',
            loadComponent: () => import('./features/section-typography/section-typography.component')
            .then(m => m.SectionTypographyComponent)
          },
          {
            path: 'imagery-composer',
            loadComponent: () => import('./features/section-imagery/section-imagery.component')
            .then(m => m.SectionImageryComponent)
          },
        ]
      },
      {
        path: 'application-and-implementation',
        children: [
          {
            path: 'web-and-guidelines',
            loadComponent: () => import('./features/web-and-guidelines/web-and-guidelines.component')
            .then(m => m.WebAndGuidelinesComponent)
          },
          {
            path: 'socialmedia-styleguide',
            loadComponent: () => import('./features/socialmedia-styleguide/socialmedia-styleguide.component')
            .then(m => m.SocialmediaStyleguideComponent)
          },
          {
            path: 'print-offline-material',
            loadComponent: () => import('./features/print-offline-material/print-offline-material.component')
            .then(m => m.PrintOfflineMaterialComponent)
          }
        ]
      },
    ]
  },
  { path: '**', redirectTo: '/color-picker' },
];