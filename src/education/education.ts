import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'education',
    templateUrl: './education.html',
    styleUrls: ['./education.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class EducationComponent{

    transcriptUrl: SafeResourceUrl;
    degreeUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer){
        this.transcriptUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/1_14_2026Transcript.pdf');
        this.degreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/degree.pdf');
    }
    
}