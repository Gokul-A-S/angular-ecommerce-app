import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  title="List of Courses"
  courses:any;
  ngOnInit(): void {
    this.loadCourses();
  }

  constructor(private service:CoursesService){
   
  }

  loadCourses(){
    this.service.getCourses().subscribe((response)=>{
      this.courses=response;
    })
  }
}
