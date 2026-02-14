import { Routes } from '@angular/router';
import { aboutComponent } from '../about/about';
import { resumeComponent } from '../resume/resume';
import { educationComponent } from '../education/education';
import { projectsComponent } from '../projects/projects';

export const routes: Routes = [
    {path: '', component: aboutComponent},
    {path: 'resume', component: resumeComponent},
    {path: 'education', component: educationComponent},
    {path: 'projects', component: projectsComponent}
];
