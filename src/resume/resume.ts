import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
    selector: 'resume',
    templateUrl: './resume.html',
    styleUrls: ['./resume.css'],
    standalone: true,
    imports: [CommonModule, NgxExtendedPdfViewerModule]
})
export class ResumeComponent{
    
}