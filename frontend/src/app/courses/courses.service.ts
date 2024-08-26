import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  readonly url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    
  }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

}
