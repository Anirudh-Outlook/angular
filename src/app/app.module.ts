import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { StudentService } from './student.service';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { HttpClientModule } from '@angular/common/http';

// import { NewchildComponent } from './newchild/newchild.component';
// import { NewgrandchildComponent } from './newgrandchild/newgrandchild.component';
import { myRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent,
    // NewchildComponent,
    // NewgrandchildComponent,
    myRoutes  ,//newchild,newgc badhulu idhi
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
