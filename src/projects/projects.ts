import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'projects',
    templateUrl: './projects.html',
    styleUrls: ['./projects.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class ProjectsComponent{
    
}