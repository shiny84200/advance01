import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Tableservices } from '../../services/tableservices';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '../../dialog/dialog/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tablecomponent',
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule,MatIconModule],
  templateUrl: './tablecomponent.html',
  styleUrl: './tablecomponent.scss',
})
export class Tablecomponent implements OnInit, AfterViewInit {
  datasource = new MatTableDataSource<any>()
  displaycolumn = ['id', 'name', 'age', 'job', 'location', 'action']
  @ViewChild(MatSort) matSort!: MatSort
  @ViewChild(MatPaginator) matpaginator!: MatPaginator

  constructor(public userdata: Tableservices, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.getUser()
  }
  getUser() {
    this.userdata.getUsers().subscribe((userdata: any) => {
      this.datasource.data = userdata
    })
  }
  ngAfterViewInit() {
    this.datasource.sort = this.matSort
    this.datasource.paginator = this.matpaginator
  }
  createUser() {
    this.userdata.createUsers().subscribe(data => {
      this.getUser()

      this.dialog.open(Dialog, {
        width: '500px',
        height: '100px',
        data: {
          title: 'create',

        }
      }

      )
    })


  }
  editUser(row: any) {
    this.userdata.updateUsers(row.id).subscribe(data => {
      this.getUser()

      this.dialog.open(Dialog, {
        width: '500px',
        height: '100px',
        data: {
          title: 'Edit',

        }
      }

      )
    })
  }
deleteuser(id:any){
  this.userdata.deleteUser(id).subscribe((data)=>{
    this.getUser()
this.dialog.open(Dialog, {
        width: '500px',
        height: '100px',
        data: {
          title: 'Delete',

        }
      }

      )
  })
}
canleave(){
  return true
}
}
