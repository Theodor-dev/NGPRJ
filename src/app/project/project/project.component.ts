import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Project} from '@app/models/Project';

@Component({
  selector: 'ngprj-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  selectedProject!: Project;
  
  @Input() projects: Project[] = [
    {
      id: 1,
      code: 'NSDHUR',
      name: 'PRJ Alpha',
      description: 'Lorem Ipsum',
      start: new Date(2021, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },

    {
      id: 2,
      code: 'IHWGE',
      name: 'PRJ Beta',
      description: 'Lorem Ipsum',
      start: new Date(2021, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },

    {
      id: 3,
      code: 'XMAIODN',
      name: 'PRJ Gamma',
      description: 'Lorem Ipsum',
      start: new Date(2021, 1, 30),
      priority: 'medium',
      done: false,
      tasks: []
    },
  ];

  constructor() {
    //setTimeout(() => this.projects[0].done = false, 3000);
  }

  ngOnInit(): void {
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  submitProjectForm(project: Project) {
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: []
    });
  }
}