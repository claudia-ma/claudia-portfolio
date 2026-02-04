import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../core/data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);

  project = computed<Project | null>(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return PROJECTS.find(p => p.id === id) ?? null;
  });
}