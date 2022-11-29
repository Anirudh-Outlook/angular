import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public toPar='';
 @Input() public isS="true";
 @Input() bhu='';
 @Input() nu=1;
 @Input() jum=false;

 public student:any[]=[{}];
constructor(private _st:StudentService)
{
 _st.getStudent().subscribe(data=>this.student=data);
}

bbb=this.nu //this doesnt work; this value ne vastundhi; parent value

public p:string="finally the string"

//remember --> function vellatledhu,, only variable(emitted);;;; so parent lo variable ee use chestam
@Output() shar = new EventEmitter<string>();
met(va:string)
{
  this.shar.emit(va);
}

@Output() newItemEvent = new EventEmitter<string>();
addNewItem(value: string) {
  this.newItemEvent.emit(value); 
}

@Output() bongu=new EventEmitter();
qaz(sd:number)
{
  this.bongu.emit(this.student);
}
//impr(){ this.student.push({"id":4,"fn":"as","ln":"dfg"}); console.table(this.student);}

//public student:any[]
//constructor(private _stdService:StudentService) { this.student=_stdService.getStudent(); console.table(this.student);}
}
