import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;

  trackById = (_: number, p: Project) => p.id;

  stackLabel(p: Project) {
    return p.stack?.slice(0, 3).join(' · ') || '';
  }
}