import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  message: any;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe({
      next: (data: any) => {
        this.message = null;
        this.projects = data;
        console.log('Projects => ', this.projects);
      },
      error: (err: HttpErrorResponse) => {
        if (err instanceof Error) {
          this.message = `An error ocurred ${err.error.message}`;
        } else {
          this.message = `Server returned error code ${err.status} - message was ${err.message}`;
        }
      },
      complete: () => console.log('All projects fetched'),
    });
  }
}
