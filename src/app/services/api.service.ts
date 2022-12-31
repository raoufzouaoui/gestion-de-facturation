import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  facture : any;
  constructor(private http : HttpClient) { }

  postFacture(data : any){
    return this.http.post<any>("http://localhost:3000/factureList",data);
  }
  getFacture(){
    return this.http.get<any>("http://localhost:3000/factureList");
  }
  
  getFactureById(){
    let params1 = new HttpParams().set('emailclient','abir@gmail.com');
    return this.http.get("http://localhost:3000/factureList/",{params:params1});
  }

  

  putFacture(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/factureList/"+id,data)
  }
  deleteFacture(id : number){
    return this.http.delete<any>("http://localhost:3000/factureList/"+id);
  }


}
