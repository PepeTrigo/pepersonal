import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iProject } from '../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private baseUrl = 'http://www.pepetrigo.com/wp-json/wp/v2/';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<unknown> {
    return this.http
      .get<iProject>(this.baseUrl + 'pt-project?_embed=true')
      .pipe(map((data) => this.parseProjectData(data)));
  }

  private parseProjectData(data: any) {
    return data.map((project: any) => {
      return {
        name: project.title.rendered,
        img: project.featured_media
          ? project._embedded['wp:featuredmedia'][0].media_details.sizes.full
              .source_url
          : '',
        type: this.findTaxonomies(project._embedded['wp:term'], 'project-type'),
        tech: this.findTaxonomies(project._embedded['wp:term'], 'project-tech'),
      };
    });
  }

  private findTaxonomies(termsArray: any, taxonomy: string) {
    return termsArray.reduce((acc: any, terms: any) => {
      terms.forEach((term: any) => {
        if (term.taxonomy === taxonomy) {
          acc.push(term);
        }
      });
      return acc;
    }, []);
  }
}
