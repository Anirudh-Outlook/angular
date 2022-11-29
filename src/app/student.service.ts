import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { StudentInterface } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }
  private url="../assets/data/student.json";
  public ret=this._http.get<StudentInterface[]>(this.url)
errorHandle(error:HttpErrorResponse){return throwError(error.message || "unknown bhe dk     bose")}
  getStudent():Observable<StudentInterface[]>
  {
console.table(this.ret);
    return  this._http.get<StudentInterface[]>(this.url).pipe(catchError(this.errorHandle));

    // return [{"id":1,"fn":"Raja","ln":"c"},{"id":2,"fn":"Rac","ln":"chu"},{"id":3,"fn":"you","ln":"bhu"}]
  }


}
