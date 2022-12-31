import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { factures } from '../classes/factureList';
import { ApiService } from '../services/api.service';
import {render} from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular13Crud';

  displayedColumns: string[] = ['clientName', 'Reference', 'Quantite', 'Prix', 'dateDebut', 'dateFin', 'emailclient'];
  dataSource!: MatTableDataSource<any>;

  lstFactures: factures[] | any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog : MatDialog,private api : ApiService){
    render(
      {
        id: "#myPaypalButtons",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successfull");
        }
      }
    )
  }

  ngOnInit(): void {
    this.api.getFactureById()
    .subscribe(
      data =>
      {
        this.lstFactures = data;
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
