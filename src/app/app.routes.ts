import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'waveform-fitter',
  },
  {
    path: 'waveform-fitter',
    loadComponent: () =>
      import('./home/waveform-fitter/waveform-fitter.component').then(
        (c) => c.WaveformFitterComponent
      ),
    title: 'Waveform Fitter',
    data: {
      title: 'Waveform Fitter'
    }
  },
  {
    path: 'stellarium',
    loadComponent: () =>
      import('./home/stellarium/stellarium.component').then(
        (c) => c.StellariumComponent
      ),
    title: 'Stellarium',
    data: {
      title: 'Stellarium'
    }
  },
  {
    path: 'd3celestial',
    loadComponent: () =>
      import('./home/d3celestial/d3celestial.component').then(
        (c) => c.D3celestialComponent
      ),
    title: 'D3 Celestial',
    data: {
      title: 'D3 Celestial'
    }
  },

  

  // {
  //   path: 'sky-viewer',
  //   loadComponent: () =>
  //     import('./home/sky-viewer/sky-viewer.component').then(
  //       (c) => c.SkyViewerComponent
  //     ),
  //   title: 'Sky Viewer',
  //   data: {
  //     title: 'Sky Viewer'
  //   }
  // },

  {
    path: 'signal-processing',
    loadComponent: () =>
      import('./home/signal-processing/signal-processing.component').then(
        (c) => c.SignalProcessingComponent
      ),
    title: 'Signal Processing',
    data: {
      title: 'Signal Processing'
    }
  },
];
