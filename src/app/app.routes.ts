import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about';
import { ResumeComponent } from '../resume/resume';
import { EducationComponent } from '../education/education';
import { ProjectsComponent } from '../projects/projects';

export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'education', component: EducationComponent},
    {path: 'projects', component: ProjectsComponent}
];
