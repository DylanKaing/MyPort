import { Routes } from '@angular/router';
import { aboutComponent } from '../about/about';
import { resumeComponent } from '../resume/resume';

export const routes: Routes = [
    {path: '', component: aboutComponent},
    {path: 'resume', component: resumeComponent}
];
