import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"];
  factureForm !: FormGroup;
  actionBtn : string = "Save";
  constructor(private formBuilder : FormBuilder,
     private api : ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
      private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.factureForm = this.formBuilder.group({
      clientName :['',Validators.required],
      Reference :['',Validators.required],
      Quantite :['',Validators.required],
      Prix :['',Validators.required],
      dateDebut :['',Validators.required],
      dateFin :['',Validators.required],
      emailclient :['',Validators.required],
    })
    
    if(this.editData){
      this.actionBtn= "Update";
      this.factureForm.controls['clientName'].setValue(this.editData.clientName);
      this.factureForm.controls['Reference'].setValue(this.editData.Reference);
      this.factureForm.controls['Quantite'].setValue(this.editData.Quantite);
      this.factureForm.controls['Prix'].setValue(this.editData.Prix);
      this.factureForm.controls['dateDebut'].setValue(this.editData.dateDebut);
      this.factureForm.controls['dateFin'].setValue(this.editData.dateFin);
      this.factureForm.controls['emailclient'].setValue(this.editData.emailclient);
      this.factureForm.controls['action'].setValue(this.editData.action);
    
    
    
    } 
  }

addfacture(){
  if(!this.editData){
    if(this.factureForm.valid){
      this.api.postFacture(this.factureForm.value)
        .subscribe({
          next:(res)=>{
            alert("Facture added successfully")
            this.factureForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the facture")
          }
        })
    }
  }else{
    this.updateFacture()
  }
}
updateFacture(){
  this.api.putFacture(this.factureForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Product updated Successfully");
      this.factureForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{
      alert("Error while updating the record")
    }
  })
}



}
