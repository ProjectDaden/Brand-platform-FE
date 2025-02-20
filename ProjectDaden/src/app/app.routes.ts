import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'color-picker'
  },
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
            path: 'name',
            loadComponent: () => import('./features/brand-name/brand-name.component')
              .then(m => m.BrandNameComponent)
          },
          {
            path: 'mission',
            loadComponent: () => import('./features/mission-vision/mission-vision.component')
              .then(m => m.MissionVisionComponent)
          },
          {
            path: 'values',
            loadComponent: () => import('./features/brand-value-personality/brand-value-personality.component')
              .then(m => m.BrandValuePersonalityComponent)
          },
          {
            path: 'audience',
            loadComponent: () => import('./features/target-audience/target-audience.component')
              .then(m => m.TargetAudienceComponent)
          },
        ]
      },
      {
        path: 'brand-voice-and-tone',
        children: [
          {
            path: 'messaging',
            loadComponent: () => import('./features/section-messaging/section-messaging.component')
            .then(m => m.SectionMessagingComponent)
          },
          {
            path: 'voice-tone',
            loadComponent: () => import('./features/voice-and-tone/voice-and-tone.component')
            .then(m => m.VoiceAndToneComponent)
          },
          {
            path: 'copywriting',
            loadComponent: () => import('./features/section-copywright/section-copywright.component')
            .then(m => m.SectionCopywrightComponent)
          },
        ]
      },
      {
        path: 'visual-identity',
        children: [
          {
            path: 'logo',
            loadComponent: () => import('./features/section-logo/section-logo.component')
            .then(m => m.SectionLogoComponent)
          },
          {
            path: 'color',
            loadComponent: () => import('./features/tool-color-picker/tool-color-picker.component')
            .then(m => m.ToolColorPickerComponent)
          },
          {
            path: 'typography',
            loadComponent: () => import('./features/section-typography/section-typography.component')
            .then(m => m.SectionTypographyComponent)
          },
          {
            path: 'imagery',
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
  }
];