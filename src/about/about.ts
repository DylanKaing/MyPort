import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class AboutComponent{
    name = 'Dylan Kaing';
    role = 'Software Developer';
    location = 'Pittsburgh and Philadelphia, PA';

    aboutText = `Welcome to my portfolio! Here you can find various things from skills, projects, transcript and even my resume.`;

    bioText = `I'm a Computer Science graduate from the University of Pittsburgh, currently looking learn and improve my skills as a developer. I'm most comfortable working with Java, but I'm always eager to explore new technologies and expand my expertise across the stack.`;

    specialtiesText = ``;

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