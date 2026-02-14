import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.css'],
    imports: [CommonModule]
})
export class aboutComponent{
    name = 'Dylan Kaing';
    role = 'Software Developer';
    location = 'Pittsburgh and Philadelphia, PA';

    aboutText = `Welcome to my portfolio! Here you can find various things from skills, projects, transcript and even my resume.`;

    bioText = `bioText placeholder`;

    specialtiesText = `specialtiesText placeholder`;

    contactLinks = [
        { label: 'Contact Me', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dkaing484@gmail.com'},
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dylan-kaing-25a7b9210/'},
        { label: 'GitHub', href:'https://github.com/DylanKaing'}
    ]

    skills = {
        technical: [
            'Java',
            'C',
            'CSS',
            'HTML',
            'R',
            'Assembly(MIPS)',
            'JavaScript',
            'Python',
            'Rust',
            'SQL',
            'TypeScript',
            'Flask',
            'Jinja',
            'Node.js',
            'SpringBoot',
            'Angular'
        ],
        tools:[
            'Git',
            'Figma',
            'VSCode',
            'Docker',
            'Selenium',
            'JUnit',
            'QuickTest',
            'Cucumber',
            'Google Address Sanitzer',
            'Google Thread Sanitizer',
            'SpotBugs',
            'StyleChecker',
            'Java Path Finder',
            'Visual VM',
            'Swagger UI',
            'Postman',
            'Maven',
            'AWS'

        ],
        soft:[
            'Problem Solving',
            'Communication',
            'Teamwork',
            'Testing & QA',
            'Debugging',
            'System Design'
        ]
    }
}