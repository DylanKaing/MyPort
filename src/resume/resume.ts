import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'resume',
    templateUrl: './resume.html',
    styleUrls: ['./resume.css'],
    standalone: true,
    imports: [CommonModule, NgxExtendedPdfViewerModule, RouterModule]
})
export class ResumeComponent{
    
}