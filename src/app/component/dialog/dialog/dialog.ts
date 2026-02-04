import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog implements OnInit {
  title:string = ''
constructor(public dialogref : MatDialogRef<Dialog>,@Inject(MAT_DIALOG_DATA) public data :any){

}
ngOnInit(){
this.title = this.data.title
}
close(){
  this.dialogref.close()
}
}
