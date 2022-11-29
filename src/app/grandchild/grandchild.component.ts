import { Component } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-grandchild',
  template: `
  <h1 style="color:red" >{{er}}</h1>
    <ul *ngFor="let x of student; let i=index" ><li>{{x.id}} -{{i}}- <button (click)=cr()  style="background:pink; color:{{r?'black':'white'}}; width:20%"> {{x.fn}}</button> </li></ul>
    <input type="text" #f placeholder="add students"  style="border-color:green ; height:25px"><button (click)='adder(f.value)' >Click to add</button> 
    `,
  styles: [`      `]
})
export class GrandchildComponent 
{ r:boolean=true;
  cr(){   this.r=!this.r; console.log("done"+this.inde) ;  }
public inde=0;
  public student:any[]=[{}]; public er:any;
  constructor(private _stud:StudentService)
  {
this._stud.getStudent().subscribe(data=>this.student=data , err=>this.er=err);
  }
  adder(val:string){this.inde=this.student[this.student.length-1].id+1; this.student.push({"id":this.inde,"fn":val,"ln":"new"});  console.table(this.student);
  }

}
