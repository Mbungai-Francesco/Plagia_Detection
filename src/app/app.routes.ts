import { Routes } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent : () =>
      import('./pages/upload/upload.component').then(m => m.UploadComponent)
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
      path: 'test',
      loadComponent : () =>
        import('./plagiarism-detection/plagiarism-detection.component').then(m => m.PlagiarismDetectionComponent)
  }
];
