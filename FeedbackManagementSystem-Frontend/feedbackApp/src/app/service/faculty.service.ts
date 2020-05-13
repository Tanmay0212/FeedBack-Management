import { Injectable } from '@angular/core';
import { FacultyModel } from '../models/faculty.model';
import { HttpClient } from '@angular/common/http';
import { SkillsModel } from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  faculties : FacultyModel[] = [];
  //skillsList :String[]=[];

  constructor(private http: HttpClient) { 
    // this.http.get<String[]>("../assets/skills.json").subscribe(data=>{
    //   this.skillsList =data;
    // });
  }

  // fetchSkillList():String[]{
  //   return this.skillsList;
  // }

   //Add Faculty
   addFaculty(faculty : FacultyModel){
     console.log(faculty);
    return this.http.post<FacultyModel[]>("http://localhost:5053/faculty/addFaculty",faculty);
  }

  fetchAllFaculties(){
    return this.http.get<FacultyModel[]>("http://localhost:5053/faculty/getAllFaculty");
  }

  deleteFaculty(index : number){
    return this.faculties.splice(index,1);
  }
}
