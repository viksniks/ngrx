import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { Programminglanguages,AppState} from "./store/models/programminglanguages.models";
//npm i @ngrx/store
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testngrx';
 // obj:Observable<Programminglanguages>;
  languages:Programminglanguages[]=[];
  lang:string="";
  constructor(private store:Store<AppState>)
  {
   
  }

  ngOnInit()
  {
   this.store.select('languages').subscribe((res)=>{
     this.languages = res;
   })
  }

  addLanguage()
  {
   
    this.store.dispatch({type:"add",payload:<Programminglanguages> {
      name: this.lang,
     
    }});
    this.lang = "";
  }

  deleteLanguage(index)
  {
    this.store.dispatch({type:"delete",payload:index});
  }

  editLanguage(index)
  {
    let newVal = prompt("Please enter langulage name");
    this.store.dispatch({type:"edit",payload:<Programminglanguages> {
      name: newVal,
     
    },index:index});
    this.lang = "";
  }
}
