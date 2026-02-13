import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.css']
})
export class aboutComponent{
    name = 'Dylan Kaing';
    role = 'Software Developer';
    location = 'Pittsburgh and Philadelphia, PA';

    aboutText = `aboutText placeholder`;

    bioText = `bioText placeholder`;

    specialtiesText = `specialtiesText placeholder`;

    contactLinks = [
        { label: 'Contact Me', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dkaing484@gmail.com'},
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dylan-kaing-25a7b9210/'},
        { label: 'GitHub', href:'https://github.com/DylanKaing'}
    ]
}