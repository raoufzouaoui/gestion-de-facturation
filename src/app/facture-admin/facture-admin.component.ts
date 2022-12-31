import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-facture-admin',
  templateUrl: './facture-admin.component.html',
  styleUrls: ['./facture-admin.component.css']
})
export class FactureAdminComponent implements OnInit {
  title = 'Angular13Crud';

  displayedColumns: string[] = ['clientName', 'Reference', 'Quantite', 'Prix', 'dateDebut', 'dateFin', 'emailclient', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog,private api : ApiService){

  }
  ngOnInit(): void {
    this.getAllFacture();
  }
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save' ){
        this.getAllFacture();
      }
    })
  }

  getAllFacture(){
    this.api.getFacture()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the Records !!");
      }
    })
  }

  editFacture(row: any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update' ){
        this.getAllFacture();
      }
    })
  }

  deleteFacture(id:number){
    this.api.deleteFacture(id)
    .subscribe({
      next:(res)=>{
        alert("facture Deleted Successfully")
        this.getAllFacture();
      },
      error:(err)=>{
        alert("Error while Deleted the Facture !!");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  

}
