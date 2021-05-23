import { NgContentAst } from '@angular/compiler';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  notes:Note[]=[];
  
  getData(elm1:HTMLInputElement,elm2:HTMLTextAreaElement)
  {
    console.log(elm1.value);
    console.log(elm2.value);
    if(elm1!=null && elm1.value!=""){
      let newNote=new Note(elm1.value,elm2.value);
      console.log(newNote);
      this.notes.push(newNote);
      console.log(this.notes);
      this.clearData(elm1,elm2);
    }
    else alert("Название заметки обязательное поле");
  }
  deleteData(id:number){
    console.log(this.notes);
    for(let i in this.notes)
    {
      if (this.notes[i].noteId==id)
      this.notes.splice(parseInt(i),1);
    }
    console.log(this.notes);
  }
  clearData(elm1:HTMLInputElement,elm2:HTMLTextAreaElement){
    elm1.value="";
    elm2.value="";
  }
}


class Note {
  noteTitle:string;
  noteText:string;
  noteCreateTime:string;
  noteCreateDate:string;
  noteId:number;
  static id=0;
  constructor(title:string,text:string) {
    this.noteTitle=title;
    this.noteText=text;
    let now=new Date();
    this.noteCreateTime=now.toLocaleTimeString();
    this.noteCreateDate=now.toLocaleDateString();
    Note.id++;
    this.noteId=Note.id;
  }
  deleteNote(){
    document.getElementById(this.noteId.toString())?.remove();
  }
}