import { Component } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { StudentService } from './student.service';
import { StudentInterface } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  myChoice=["one","two","ten",4,8,"ha"+(6+6*35)];
  sendtoChild="from App";
msg:String=''



isShow=false
  clicked()
  {
this.isShow=!this.isShow;
  }

  items = ['item1', 'item2', 'item3', 'item4'];
// these 2 methods are from child class,,,, ante shares data ani
  addItem(newItem: string) {
    this.myChoice.push(newItem);
    console.log(this.myChoice);
  }
df:StudentInterface={"id":10,"fn":"raha","ln":'ok'};
  xz(j:StudentService)
  {
   console.table(j); console.log(this.df)
  }
  public v:number=5
  myIt(newItem1: string) { //to take only integer
   // if ( !isNaN(newItem1) && isNumber(+newItem1)) 
   this.v=Number(newItem1); console.log(typeof(this.v))
    if (typeof  Number(newItem1) !== "undefined") {
      this.myChoice.push(newItem1);
      console.log(this.myChoice+"     "+typeof  Number(newItem1)+"       ");
    } else {
      alert("sol");
    }
  }


}
